# Overview

This is a full-stack web application built as a personal portfolio for Alex Johnson, a Full Stack Developer. The application showcases a modern, animated portfolio website with smooth transitions, particle effects, and responsive design. It demonstrates proficiency in React, TypeScript, and modern web development practices with a complete backend API infrastructure.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Animations**: Framer Motion for smooth animations, transitions, and particle effects
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript for type safety across the entire stack
- **Development**: Hot module replacement and development middleware integrated with Vite
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database implementations

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for consistency between frontend and backend
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for rapid development and testing

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple) for scalable session handling
- **Schema**: User authentication schema with username/password fields
- **Validation**: Zod integration with Drizzle for runtime type validation and schema enforcement

## External Dependencies
- **Database**: Neon PostgreSQL serverless database for production-ready data persistence
- **UI Library**: Extensive Radix UI component collection for accessible, unstyled UI primitives
- **Styling**: Tailwind CSS with PostCSS for utility-first styling and optimization
- **Development Tools**: ESBuild for fast bundling, TSX for TypeScript execution in development
- **Form Handling**: React Hook Form with Hookform Resolvers for robust form management
- **Date Utilities**: date-fns for date manipulation and formatting
- **Command Interface**: cmdk for building command palette interfaces
- **Carousel**: Embla Carousel for touch-friendly carousel components