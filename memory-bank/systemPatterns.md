# System Patterns: Arjay Beauty Lounge

## System Architecture
- **Framework**: Astro (Static Site Generator)
- **Styling**: Tailwind CSS via CDN + Revolutionary Global CSS System
- **Language**: TypeScript for type safety
- **Deployment**: Netlify with automatic builds
- **Forms**: Netlify Forms for contact handling
- **🆕 Global Styling System**: CSS pseudo-elements for automatic consistency

## Key Technical Decisions

### Astro Framework Choice
- **Static Generation**: Pre-built HTML for maximum performance
- **Component Architecture**: Reusable .astro components
- **SEO Optimization**: Server-side rendering for search engines
- **Minimal JavaScript**: Only essential client-side code (slideshow)
- **TypeScript Support**: Built-in type checking

### 🆕 Revolutionary Global Styling System
**Problem Solved**: Manual background management and visual inconsistencies
**Solution**: CSS pseudo-elements automatically apply Hero backgrounds to ALL sections

```css
/* Automatic background consistency for ALL sections */
section:not(#home)::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

section:not(#home)::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  z-index: 2;
}
```

## Design Patterns in Use

### 🆕 Glass Morphism Pattern
- **Consistent Effects**: `bg-white/20 backdrop-blur-md border border-white/30`
- **Perfect Readability**: White text with `text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7)`
- **Interactive Elements**: Glass containers for forms and contact info
- **Modern Aesthetics**: Professional, contemporary appearance

### Component Design
- **Single Responsibility**: Each component handles one section
- **🆕 Automatic Consistency**: Global CSS ensures visual uniformity
- **🆕 Glass Effects**: Modern backdrop-blur throughout interface
- **Responsive Breakpoints**: Mobile, tablet, desktop optimization
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and minimal JavaScript

## Component Relationships
```
src/
├── components/
│   ├── Header.astro       # Navigation with glass effects
│   ├── Hero.astro         # Main section + GLOBAL CSS SYSTEM
│   ├── Services.astro     # Horizontal list format
│   ├── About.astro        # Company information
│   ├── Contact.astro      # Enhanced form with glass effects
│   └── Footer.astro       # Glass styling matching header
├── layouts/
│   └── Layout.astro       # Base page template
└── pages/
    └── index.astro        # Main page composition
```

## Data Flow
- **Static Generation**: Astro pre-builds all HTML at build time
- **Form Submission**: Netlify Forms handle contact form processing
- **Background Images**: Fixed positioning with slideshow rotation
- **Global Styling**: CSS pseudo-elements automatically applied to all sections

## Security Patterns
- **Static Site**: No server-side vulnerabilities
- **Form Handling**: Netlify's secure form processing
- **HTTPS**: Automatic SSL certificate from Netlify
- **No Database**: Eliminates SQL injection risks

## Performance Considerations
- **Static Generation**: Maximum performance with pre-built HTML
- **Minimal JavaScript**: Only slideshow functionality
- **CDN Delivery**: Global content distribution via Netlify
- **Optimized Images**: Compressed beauty photos
- **CSS Efficiency**: Global styling system reduces redundancy

## Integration Points
- **Netlify Forms**: Contact form processing
- **Git Repository**: Automatic deployment triggers
- **CDN**: Tailwind CSS via CDN for fast loading
- **Future**: Google Analytics, Search Console integration planned

## 🆕 Major Technical Achievements
- **Zero Manual Background Management**: Global CSS handles all section consistency
- **Perfect Visual Uniformity**: All sections automatically match Hero styling
- **Modern Glass Interface**: Professional backdrop-blur effects throughout
- **Optimized User Experience**: Enhanced readability and interaction design
- **Maintainable Architecture**: Future sections automatically inherit correct styling

---
*This document captures the revolutionary technical architecture and patterns implemented in the project.*
