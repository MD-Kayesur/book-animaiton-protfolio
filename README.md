# Portfolio Book

A premium, book-style interactive portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Instead of scrolling, visitors flip through pages exactly like a real hardcover book.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Edit `data/portfolio.ts` to update your name, bio, skills, experience, projects, services, education, achievements, testimonials, and social links.
- Each content page lives in `components/Portfolio/` — every layout is unique and easy to restyle independently.
- The physical book mechanics (3D flip, shadows, spine, binding, covers) live in `components/Book/`.
- `components/Book/sheets.tsx` defines which content appears on which physical page/sheet — reorder or add sheets here.

## How the flip works

The book is modeled as a stack of physical "sheets" (`components/Book/PageFlip.tsx`). Each sheet has a front face (right-hand page) and a back face (left-hand page, mirrored with `rotateY(180deg)` and `backface-visibility: hidden`). Flipping a sheet animates its `rotateY` from `0deg` to `-180deg` with a spring, while a derived shadow gradient sweeps across the page in sync with rotation progress to simulate paper bending and cast shadows.

On mobile, `components/Book/MobileBook.tsx` switches to a single full-width page mode, still using the same 3D rotate-and-reveal technique, optimized for narrow screens.

## Tech

- Next.js 15 / App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
