# Sharath R — Portfolio

Premium single-page portfolio for Sharath R, a web developer / MCA student in
Bangalore, India. Built with **Next.js 16** (App Router, Turbopack),
**TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command        | Description                                   |
| -------------- | --------------------------------------------- |
| `npm run dev`  | Start the dev server with Turbopack           |
| `npm run build`| Create a production build                     |
| `npm run start`| Serve the production build                    |
| `npm run lint` | Run ESLint                                    |

## Editing your content

All personal content lives in one file:

- **`data/portfolio.ts`** — profile, bio, education, skills, certifications,
  projects, and navigation. Edit in plain text; the layout updates everywhere.

Other things you'll probably want to replace:

- **`public/profile.jpg`** — replace with a real photo (the current file is a
  monogram placeholder so the layout, dimensions 4:5, and image optimization
  can be verified). Alternatively delete it and the hero falls back to
  `public/profile-placeholder.svg`.
- **`public/resume.pdf`** — currently a placeholder PDF; replace with your
  current resume.
- **Project links** — `data/portfolio.ts` contains
  `REPLACE_WITH_GITHUB_URL` / `REPLACE_WITH_LIVE_DEMO_URL` placeholders (each
  marked with a `TODO`) to swap for the real URLs.

## Contact form

The contact form intentionally does **not** send mail on its own. On submit it
validates the input and shows a success state with a pre-filled `mailto:` link
so the message opens in the visitor's mail client.

To send real messages, wire an API route/service — see the `TODO` in
`components/Contact.tsx` (Resend, Formspree, or EmailJS are natural fits).

## Site configuration

- **`lib/site.ts`** — the canonical URL (used by `sitemap.xml` / metadata),
  page title, description, and the pre-paint theme script.
- **`app/icon.svg`** — favicon. **`app/opengraph-image.tsx`** — social share
  image. **`app/robots.ts`** and **`app/sitemap.ts`** — SEO files.

## Design system

- Dark-first theme (`#0b0d10` charcoal) with warm bronze accent
  (`#dda75f`) and sage secondary (`#93b4ad`); a light "paper" theme
  (`#f6f3ec`) is included.
- Typography: **Sora** (UI/display) + **JetBrains Mono** (labels/meta).
- Tokens live in `app/globals.css` and are switched with the `data-theme`
  attribute on `<html>` (set pre-paint by `lib/site.ts`'s `themeScript` to
  avoid a flash).

## Notes

- Accessibility: skip link, labelled form fields with `aria-invalid` /
  `role="alert"` errors, focus-trapped modal dialogs, keyboard dismiss (Esc),
  `prefers-reduced-motion` support, and ≥44px touch targets on coarse
  pointers.
- No horizontal overflow at any width 320–1920px; validated with programmatic
  headless-Chrome audits (`puppeteer-core`).