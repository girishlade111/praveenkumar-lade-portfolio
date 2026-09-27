# Praveenkumar Lade — Portfolio

A personal executive-style portfolio website for **Praveenkumar Lade**, built with Next.js. Dark/light mode toggle, animated scroll sections, and a leadership-focused narrative.

## Features

- **Sections:** Home, About, Leadership, Achievements, Vision, Contact
- **Dark/light mode toggle** with smooth scroll-spy navigation
- **Framer Motion** scroll animations, animated counters and transitions
- **Decorative contact form** (UI only — no backend wired)
- Fully client-side, no database, no login

## Tech Stack

- **Framework:** Next.js 15 (App Router, statically exported)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, shadcn/ui (Radix primitives), Lucide icons, Framer Motion
- **Extra:** @headlessui/react, @heroicons/react, @number-flow/react

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

### Production build (static)

```bash
npm run build   # outputs to ./out
npx serve out   # preview the static export
```

## Project Structure

```
src/
  app/
    page.tsx         # Full portfolio: all sections + contact UI
    layout.tsx       # Root layout, metadata
    globals.css      # Tailwind styles
  components/ui/     # shadcn/ui component library
  hooks/             # React hooks
  lib/               # Utilities
public/              # Static assets
next.config.ts       # output: 'export' + basePath '/praveenkumar-lade-portfolio'
```

## Environment Variables

None required — the app is fully client-side.

## Deployment Notes

- The app is statically exported (`output: 'export'`) and deployed to GitHub Pages at `https://girishlade111.github.io/praveenkumar-lade-portfolio/`.
- `basePath: '/praveenkumar-lade-portfolio'` is set so asset URLs resolve under the GitHub Pages subpath. **If you deploy to a root domain (e.g. Vercel), remove the `basePath` line.**
- Security: Next.js was bumped from 15.3.5 to 15.3.8 (fixes CVE-2025-55182, CVE-2025-66478).
- `@libsql/client` is listed as a dependency but is not used anywhere in the source — safe to remove.

---

Built by Girish Lade · https://ladestack.in
