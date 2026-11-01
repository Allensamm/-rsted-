# Ørsted — Energy for what comes next

Independent homepage redesign concept by Bazalel Design. Not commissioned, approved or endorsed by Ørsted. Editorial snapshot: 1 November 2026.

## Stack and commands

React 19, TypeScript, Next.js-compatible Vinext, Tailwind CSS 4 with custom responsive styles. The supplied Sites/Cloudflare integration is retained.

- `pnpm install`
- `pnpm dev`
- `pnpm exec tsc --noEmit`
- `pnpm build`

The managed environment uses the Sites setup/install/build helpers instead of a second dev server.

## Deploying to Vercel

Import this repository with the repository root as the Root Directory. The committed
`vercel.json` selects Next.js and runs its native production build, producing `.next`.
This overrides the default `pnpm build` command, which is retained for the original
Sites/Cloudflare preview. No environment variables or database bindings are required
for the homepage. Git pushes to the connected production branch trigger a new build.

To verify the Vercel build locally after installing dependencies, run
`node node_modules/next/dist/bin/next build --webpack`.

## Source map

- `app/page.tsx`: complete ten-section homepage and corporate footer.
- `components/site-ui.tsx`: accessible header disclosures, native modal mobile navigation and search, responsive photography, intersection-based entrance motion.
- `lib/content.ts`: verified official links, news snapshot, project facts, search resources and image credits.
- `app/globals.css`: design tokens, typography, responsive layouts, focus styles and reduced-motion handling.
- `app/concept-notes/page.tsx`: factual sources, image credits, research limits and independent-concept disclosure.
- `public/images`: local WebP variants and unchanged wordmark geometry.
- `public/fonts`: local DM Sans files with SIL Open Font License.

## Editorial and asset constraints

All projects are identified as operational based on official sources checked on 1 November 2026. Capacities are whole-project totals, not ownership-adjusted. News is an explicitly dated selection, not a live feed. The Gunfleet transaction is an agreement, not a completed acquisition; Q3 results are scheduled for 5 November, not yet published. Conflicting under-construction figures were excluded. Share-price access is an official link.

Unsplash photographs are licensed illustrative replacements. They do not depict the named featured projects or news events. Hero: Rampion (not an Ørsted project), Nicholas Doherty. The worker is not represented as an Ørsted employee. Full credits and official sources appear on `/concept-notes`. Wordmark is used for nominative identification in this private proposal; third-party campaign permissions are not claimed. Replace illustrative photography with approved assets before an authorised corporate launch.

No analytics, tracking integrations or forms that collect personal data. Search filters 23 featured resources and links to the official website. `noindex` and `robots.txt` avoid presenting the proposal as the official corporate site.

## Design decisions

Preserve the official site's broad corporate audience coverage. Move business clarity, dated evidence and real projects into a coherent opening narrative. Keep investor and careers pathways prominent. Use large photography, rectangular controls and editorial grids rather than repeated cards. Corporate blue, deep navy and calm light backgrounds maintain an energy and engineering character.

## Validation

TypeScript check, production build, browser checks of desktop rendering, mobile iframe rendering at representative viewport widths, navigation disclosures, keyboard Escape/focus restoration, search results/empty state, and image/layout checks. These checks do not constitute an independent WCAG certification or a measured Lighthouse score. The original site's direct visual interface was access-restricted; comparisons are limited to verified official content and structure.
