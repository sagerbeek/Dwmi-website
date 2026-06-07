# DWMI website

One-page website for **DWMI — Dutch Water Management International** at `www.dwmi.nl`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Inline SVG React components for all visual assets

## Editing content

- Main page copy and section ordering: `app/page.tsx`
- Logo mark and wordmark: `components/Logo.tsx`
- Hero, process, network and expertise SVGs: `components/InlineSVGIllustrations.tsx`
- Board cards and reusable content cards: `components/Cards.tsx`
- Contact form and placeholder email: `components/ContactForm.tsx`
- SEO metadata: `app/layout.tsx`
- Global styling and colour tokens: `app/globals.css`

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The contact form is static and intentionally has no backend integration yet.
