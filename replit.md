# AIsaiah Foundation - Nonprofit Website

## Overview

This is a modern, faith-centered nonprofit website for AIsaiah Foundation, an organization supporting the AIsaiah Spiritual App. The project is built as a full-stack web application with a React frontend and Express backend, designed to showcase the foundation's mission of bridging faith and technology through AI-powered spiritual tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 21, 2025
- **Database Integration**: Successfully integrated PostgreSQL database using Neon Database
  - Added DatabaseStorage class to replace MemStorage for persistent data storage
  - Configured Drizzle ORM with serverless PostgreSQL connection using WebSocket support
  - Pushed database schema to PostgreSQL with tables: users, contacts, newsletter_subscriptions, waitlist_entries
  - All form submissions now persist to database rather than in-memory storage

- **Production Deployment Fixes**: Resolved all deployment configuration issues
  - Fixed server/index.ts to properly handle production environment detection
  - Added automatic NODE_ENV=production fallback when not specified
  - Implemented proper Express app environment configuration
  - Enhanced error handling with production-safe error responses
  - Added comprehensive server startup logging and error reporting
  - Implemented graceful shutdown handling for SIGTERM and SIGINT signals
  - Fixed server.listen() syntax to properly bind to host and port
  - Added production build verification and static file serving validation
  - Comprehensive error handling for server setup and startup failures
  - Successfully tested production server with health check endpoints

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom spiritual theme colors (teal and purple gradients)
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for form submissions and data management
- **Development**: Hot reloading with Vite middleware integration

### Database & Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database (active)
- **Migration System**: Drizzle Kit for schema management
- **Storage Implementation**: DatabaseStorage class with full PostgreSQL integration
- **Connection**: Serverless PostgreSQL via @neondatabase/serverless with WebSocket support

## Key Components

### Core Website Sections
1. **Hero Section**: Logo display with animated background and call-to-action buttons
2. **About Section**: Mission explanation with faith-centered messaging
3. **Features Section**: App features showcase with waitlist functionality
4. **Get Involved Section**: Donation, volunteering, and partnership opportunities
5. **Events Section**: Newsletter signup and community events
6. **Testimonials Section**: User feedback and endorsements
7. **Contact Section**: Contact form and organizational information

### Technical Components
- **Theme System**: Dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Form Handling**: Contact forms, newsletter subscriptions, and waitlist management
- **Logo Integration**: Custom SVG logo with spiritual symbolism (cross, dove, circuit design)

## Data Flow

### Form Submissions
1. User fills out forms (contact, newsletter, waitlist)
2. Frontend validates data using Zod schemas
3. Data sent to Express API endpoints
4. Backend validates and stores data
5. Success/error feedback displayed to user

### Content Management
- Static content served from React components
- Dynamic form data managed through API endpoints
- Toast notifications for user feedback
- Smooth scrolling navigation between sections

## External Dependencies

### UI & Design
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for enhanced UX

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing with Autoprefixer

### Database & Validation
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime type validation for forms and API
- **Neon Database**: Serverless PostgreSQL provider

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Bundled with frontend for efficient serving

### Environment Configuration
- **Development**: Local development with Vite dev server and hot reloading
- **Production**: Express server serves pre-built React app as static files from `dist/public`
- **Database**: PostgreSQL connection via environment variables
- **Port Configuration**: Server automatically binds to PORT environment variable (default: 5000)

### Deployment Commands
```bash
# Development
npm run dev

# Production Build
npm run build

# Production Server
NODE_ENV=production npm start
```

### Hosting Requirements
- Node.js 20+ environment for Express server
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability
- Port 5000 accessibility (configurable via PORT env var)

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production, auto-defaults to production)
- `PORT`: Server port binding (default: 5000)

### Production Ready Features
- ✅ Automatic production environment detection and fallback
- ✅ Comprehensive error handling with production-safe responses  
- ✅ Graceful server shutdown handling (SIGTERM/SIGINT)
- ✅ Static file serving with proper build directory validation
- ✅ Health check endpoint (`/api/health`) for monitoring
- ✅ Request logging and performance monitoring
- ✅ Database connectivity validation

The application is production-ready and deployable on Replit, Vercel, Railway, or traditional hosting providers with Node.js support.