import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Set NODE_ENV to production if not specified
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

const app = express();

// Set app environment properly for Express
app.set("env", process.env.NODE_ENV);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve attached assets
app.use('/attached_assets', express.static('attached_assets'));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Log error details
    log(`Error ${status} on ${req.method} ${req.path}: ${message}`, "error");
    console.error("Server error:", err);

    // Don't expose internal errors in production
    const isProduction = process.env.NODE_ENV === "production";
    res.status(status).json({ 
      message: isProduction && status === 500 ? "Internal Server Error" : message,
      ...(isProduction ? {} : { error: err.message, stack: err.stack })
    });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  const isDevelopment = process.env.NODE_ENV === "development";
  
  try {
    if (isDevelopment) {
      log("Setting up Vite development server...");
      await setupVite(app, server);
    } else {
      log("Setting up production static file serving...");
      serveStatic(app);
    }
  } catch (error) {
    log(`Failed to setup ${isDevelopment ? 'development' : 'production'} server: ${error}`, "error");
    console.error("Server setup error:", error);
    process.exit(1);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  
  server.listen(port, "0.0.0.0", () => {
    log(`✓ AIsaiah Foundation server running in ${process.env.NODE_ENV} mode on port ${port}`);
    log(`✓ Server listening on http://0.0.0.0:${port}`);
  });

  // Graceful shutdown handling
  process.on('SIGTERM', () => {
    log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    log('SIGINT received, shutting down gracefully');
    server.close(() => {
      log('Server closed');
      process.exit(0);
    });
  });

})().catch((error) => {
  log(`Failed to start server: ${error}`, "error");
  console.error("Server startup error:", error);
  process.exit(1);
});
