# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a professional beauty salon website for ARJAY Beauty Lounge, built with Astro v5.9.1 and Tailwind CSS v4.1.8. The site is designed to showcase beauty services, provide contact information, and create a strong digital presence for the business.

## Development Commands
All commands are run from the project root:

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro` - Run Astro CLI commands

## Architecture Overview
**Tech Stack:**
- Astro v5.9.1 with TypeScript (static site generation)
- React 19.1.0 for interactive components 
- Tailwind CSS v4.1.8 with custom design system
- Framer Motion for animations
- Lucide React for icons
- Netlify Forms for contact form handling

**Project Structure:**
- `src/pages/index.astro` - Main landing page
- `src/components/` - Reusable Astro and React components
- `src/layouts/Layout.astro` - Base layout with SEO meta tags
- `src/styles/` - Global CSS and mobile-specific styles
- `memory-bank/` - Project documentation and context
- `public/` - Static assets (images, logos)

## Component Architecture
The site uses a component-based architecture with:
- **Header.astro** - Navigation with mobile hamburger menu
- **Hero.astro** - Main hero section with call-to-action
- **Services.astro** - Service listings and descriptions
- **About.astro** - Salon information and story
- **Contact.astro** - Contact form and location details
- **Footer.astro** - Footer with business info
- **AnimatedHero.tsx** - React component with Framer Motion animations

## Design System
Custom Tailwind configuration with:
- **Colors:** Primary (pink), secondary (purple), accent (amber) with full shade palettes
- **Typography:** Playfair Display for headings, system fonts for body
- **Shadows:** Custom soft, medium, and large shadow utilities
- **Animations:** Float animation and custom keyframes
- **Mobile-first:** Responsive breakpoints with touch-friendly sizing

## Styling Conventions
- Use Tailwind utility classes for styling
- Mobile-first responsive design approach
- Glass morphism effects with backdrop-blur
- Consistent color scheme using defined CSS custom properties
- 44px+ minimum touch targets for accessibility
- iOS-optimized form inputs (16px+ font-size to prevent zoom)

## Configuration Files
- `astro.config.mjs` - Astro configuration with React integration and dev server on port 3000
- `tailwind.config.mjs` - Custom design system with extended colors, fonts, and animations
- `netlify.toml` - Deployment configuration for Netlify hosting
- `tsconfig.json` - TypeScript configuration extending Astro strict settings

## Development Notes
- Server runs on port 3000 (configured in astro.config.mjs)
- Build output goes to `dist/` directory
- Uses Netlify Forms for serverless form handling
- No server-side code - purely static site generation
- Mobile-optimized with responsive images and touch interactions
- SEO-optimized with proper meta tags and structured data

## Memory Bank
The `memory-bank/` directory contains project documentation:
- `projectbrief.md` - Core requirements and goals
- `techContext.md` - Technical implementation details
- `progress.md` - Development progress tracking
- `systemPatterns.md` - Design patterns and conventions