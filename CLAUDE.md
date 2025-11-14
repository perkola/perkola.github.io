# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV website built as a single-page application using Vite, Lit web components, TypeScript, and Tailwind CSS v4. The site is deployed to GitHub Pages using git subtree.

## Development Commands

```bash
# Start development server (http://localhost:5173/)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Deployment to GitHub Pages

The `dist/` folder is deployed to the `gh-pages` branch using git subtree:

```bash
# 1. Build the site
npm run build

# 2. Commit dist changes (dist is in .gitignore, so force add)
git add -f dist
git commit -m "Update site"

# 3. Deploy using git subtree (force push if needed)
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

The site is then available at https://perkola.github.io/

## Architecture

### Component Structure

The entire CV is a single Lit web component (`CvApp`) in `src/cv-app.ts` that renders in light DOM (not shadow DOM) to allow Tailwind CSS classes to work.

**Key architectural decisions:**
- `createRenderRoot()` returns `this` instead of creating shadow DOM - this is required for Tailwind v4 classes to apply
- Uses `@state()` decorator for reactive theme mode that triggers re-renders
- All data (personal info, experience, education) is stored as private class properties
- Renders using Lit's `html` template literals

### Data Models

```typescript
interface Position {
  title: string
  period: string
  description: string[]
  skills?: string[]  // Optional: displayed as small badges
}

interface Experience {
  company: string
  positions: Position[]  // Supports multiple positions at same company
}

interface Education {
  degree: string
  institution: string
  period: string
  details?: string
}
```

### Timeline Feature for Multiple Positions

When a company has multiple positions, they're displayed with a vertical timeline:
- Blue dots mark each position
- A vertical line connects positions within the same company
- The line is positioned absolutely and only shows when `positions.length > 1`
- Dots are centered at `-40px` left offset, line at `5px` left offset

### Dark Mode Implementation

Three modes: light, dark, system
- Theme state stored in localStorage as 'theme-mode'
- Applies 'dark' class to `document.documentElement`
- Tailwind v4 uses custom variant: `@variant dark (&:where(.dark, .dark *));` in `src/index.css`
- System preference detected via `window.matchMedia('(prefers-color-scheme: dark)')`
- Cycles through modes: light → system → dark

### Icons

All icons use Heroicons v2 Outline style (24x24 viewBox, 1.5px stroke):
- Stored in `getIcon()` method as Lit html templates
- Icons: sun, moon, computer (theme toggle), envelope, mapPin, briefcase, codeBracket
- SVG uses `currentColor` for automatic color inheritance

## Tailwind CSS v4 Configuration

**Important differences from v3:**
- Uses `@import "tailwindcss";` instead of `@tailwind` directives
- Requires `@tailwindcss/postcss` plugin (not `tailwindcss` directly)
- Dark mode configured via `@variant` in CSS, not in config file
- `tailwind.config.js` has minimal configuration (just content paths)

## Customizing CV Content

Edit the private properties in `src/cv-app.ts` (around lines 31-145):

1. **Personal info** (lines 31-36): name, title, email, location, social links
2. **Experience** (lines 38-132): company → positions array
   - Each position can have optional `skills` array
3. **Education** (lines 134-145): degree, institution, period, optional details

## File Structure

```
src/
  cv-app.ts          # Main component with all CV logic and data
  index.css          # Tailwind import + dark mode variant + body styles
index.html           # Entry point, loads cv-app.ts
tailwind.config.js   # Minimal config (content paths only)
postcss.config.js    # Uses @tailwindcss/postcss plugin
```

## TypeScript Configuration

- Uses experimental decorators for Lit (`@customElement`, `@state`)
- `useDefineForClassFields: false` required for decorators
- Strict mode enabled with additional linting rules
