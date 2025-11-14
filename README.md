# Personal CV Site

A modern, responsive CV website built with Vite, Lit, TypeScript, and Tailwind CSS.

## Features

- Built with Lit web components for maintainability
- Styled with Tailwind CSS for modern, responsive design
- TypeScript for type safety
- Fast development and build with Vite
- Ready to deploy as a static site

## Getting Started

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:5173/`

### Build

```bash
npm run build
```

This creates a production build in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Customizing Your CV

Edit the content in `src/cv-app.ts`:

1. **Personal Information** (lines 26-32):
   - `fullName`: Your full name
   - `jobTitle`: Your job title/role
   - `email`, `phone`, `location`: Contact details
   - `linkedin`, `github`: Social links

2. **Summary** (line 34):
   - Brief professional summary

3. **Experience** (lines 36-52):
   - Add/edit work experience entries
   - Each entry has: title, company, period, description array

4. **Education** (lines 54-61):
   - Add/edit education entries
   - Each entry has: degree, institution, period, optional details

5. **Skills** (lines 63-77):
   - Organize skills by category
   - Each category has a name and items array

## Project Structure

```
├── src/
│   ├── cv-app.ts      # Main CV component
│   └── index.css      # Global styles with Tailwind
├── index.html         # Entry point
└── package.json       # Dependencies
```

## Deployment

After building, deploy the `dist/` folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages from this repo:
1. Build: `npm run build`
2. Push the `dist/` folder to your repository
3. Configure GitHub Pages to serve from the `dist/` directory

## Tech Stack

- **Vite** - Fast build tool and dev server
- **Lit** - Lightweight web components library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
