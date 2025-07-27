# AGENTS.md - Arjay Beauty Lounge

## Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview built site
```

## Code Style
- **Framework**: Astro + React + TypeScript
- **Styling**: Tailwind CSS v4.1.8, mobile-first
- **Imports**: React hooks first, then components, then utilities
- **Naming**: camelCase for variables, PascalCase for components
- **Types**: Strict TypeScript, no any types
- **Formatting**: 2-space indentation, semicolons required

## Key Patterns
- **Mobile-first**: Always design mobile first, enhance for desktop
- **Glass morphism**: `bg-white/85 backdrop-blur-2xl` for nav, `bg-white/90` for forms
- **Touch targets**: Minimum 44px for all interactive elements
- **Contrast**: Gray-800 text on white/90 backgrounds for legibility
- **Accessibility**: WCAG AA compliance throughout

## File Structure
- Components in `src/components/*.astro` or `*.tsx`
- Pages in `src/pages/*.astro`
- Styles in `src/styles/*.css`
- Assets in `public/` and `src/assets/`

## Testing
- Manual mobile-first testing required
- Cross-device compatibility checks
- Build must pass zero errors before deployment