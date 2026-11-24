<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project scope

- Build a multilingual Next.js App Router site for thematic trips, retreats,
  and venues. Use messenger links for organizer contact when contact details
  are available. The current footer shows a placeholder.
- Keep site content in the repository. Ask before introducing a CMS,
  backend, contact form, or new runtime dependency.

## Pages and components

- Before adding a page, inspect a comparable page and its components. Use
  `app/page.tsx` and `app/layout.tsx` as references for route composition and
  metadata. Follow existing App Router, layout, and naming conventions.
- Compose sections in route files and define route-specific metadata in the
  relevant page or layout. Keep page-specific components with their feature,
  as with `components/home/`.
- Reuse shared components when their behavior and appearance fit. Extract
  shared components when multiple callers need the same behavior or UI.
  Keep page-specific layout in the feature's own components.
- Use Server Components by default. Add `'use client'` at the smallest
  boundary that needs state, event handlers, or browser APIs.

## Content and localization

- Put navigation labels, buttons, shared headings, and other UI strings in
  locale dictionaries. The home page and root layout currently use
  `i18n/ru.ts` directly. When adding locale routing and dictionaries for
  Montenegrin and English, define fallback behavior and the document
  language for each locale, then follow those conventions on new pages.
- Keep program data in `content/programs.ts` and venue data in
  `content/venues.ts`. Reuse the venue records when adding detail pages.
- Keep shared facts such as dates, prices, capacities, and contact links in
  one place when several views use them. Ask for missing facts and flag
  missing translations.
- When changing the active program list, preserve its selection by
  `status === "open"` and sort by `order` unless the task changes that behavior.
  Check the empty, single-program, and multiple-program states, including
  the intended maximum of four active programs.

## Styling and accessibility

Use plain CSS for global resets, palette variables, and base typography, and CSS Modules for components. Do not introduce Tailwind or utility-class styling.

Use only `--font-heading` and `--font-body` for font families. Keep the existing local Cormorant Garamond and Inter fonts and their generic `serif` and `sans-serif` fallbacks.

- Reuse existing color variables, layout widths, and spacing patterns.
  Scope page-specific styles to the page or component.
- Use semantic headings, links for navigation, and buttons for actions.
  Keep interactive controls keyboard-accessible with visible focus.
- Follow the existing CSS background pattern for decorative imagery.
  Provide meaningful alt text for informative photos and check image crops
  at mobile and desktop widths.

## Verification and scope of changes

- Keep edits scoped to the request. Preserve existing routes, translations,
  and contact behavior unless the task changes them.
- Use Node.js `22.23.5`. Check `package.json` for the available scripts and
  use `npm run lint` and `npm run build` as applicable.
- For visible changes, open the affected pages at mobile and desktop widths.
  Check affected locales and exercise any changed navigation or messenger
  links.
- In the handoff, state what changed, which checks ran, and which checks
  could not be completed.
