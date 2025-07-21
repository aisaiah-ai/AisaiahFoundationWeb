# AIsaiah Foundation - Nonprofit Website

## Overview

This is a modern, faith-centered nonprofit website for AIsaiah Foundation, an organization supporting the AIsaiah Spiritual App. The project is built as a full-stack web application with a React frontend and Express backend, designed to showcase the foundation's mission of bridging faith and technology through AI-powered spiritual tools.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Database**: PostgreSQL (configured for Neon Database)
- **Migration System**: Drizzle Kit for schema management
- **Development Storage**: In-memory storage implementation for development/testing

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
- **Development**: Local development with Vite dev server
- **Production**: Express server serves built React app as static files
- **Database**: PostgreSQL connection via environment variables

### Hosting Requirements
- Node.js environment for Express server
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)

The application is designed to be easily deployable on platforms like Vercel, Netlify, or traditional hosting providers with Node.js support.