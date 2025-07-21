import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          error: validationError.toString() 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error while processing contact form" 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter",
        id: subscription.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          error: validationError.toString() 
        });
      } else if (error instanceof Error && error.message.includes("already subscribed")) {
        res.status(409).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter" 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error while processing newsletter subscription" 
        });
      }
    }
  });

  // Waitlist entry
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.json({ 
        success: true, 
        message: "Successfully added to waitlist",
        id: entry.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          error: validationError.toString() 
        });
      } else if (error instanceof Error && error.message.includes("already in waitlist")) {
        res.status(409).json({ 
          success: false, 
          message: "This email is already in our waitlist" 
        });
      } else {
        console.error("Waitlist entry error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error while processing waitlist entry" 
        });
      }
    }
  });

  // Get all contacts (admin endpoint - could be protected in production)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json({ 
        success: true, 
        data: contacts,
        count: contacts.length 
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error while fetching contacts" 
      });
    }
  });

  // Get all newsletter subscriptions (admin endpoint - could be protected in production)
  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json({ 
        success: true, 
        data: subscriptions,
        count: subscriptions.length 
      });
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error while fetching newsletter subscriptions" 
      });
    }
  });

  // Get all waitlist entries (admin endpoint - could be protected in production)
  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      res.json({ 
        success: true, 
        data: entries,
        count: entries.length 
      });
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error while fetching waitlist entries" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      success: true, 
      message: "AIsaiah Foundation API is running",
      timestamp: new Date().toISOString() 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
