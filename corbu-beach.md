# Corbu Beach visitor guide

The bilingual source is maintained in `src/messages` and `src/data/guides.ts`.
Visitor source links and check dates are visible on the pages.
Existing gallery files are retained.

## Native Cloudflare build

The source pins Next.js 15.5.29, next-intl 4.9.2, OpenNext 1.20.16 and
Wrangler 4.160.0 in the npm lockfile.

Run `npm ci`, then `npm run typecheck`, `npm run lint` and `npm run check:content`.
`npm run build` produces the complete native OpenNext Worker and compiled config.
Its explicit `buildCommand` invokes `npm run build:next` for the Next-only step,
so the adapter does not recursively call the main build script. `build:worker`
aliases the complete build; `preview:local` runs the native local Worker.

The hosting build must finish before `npx wrangler deploy`: Wrangler delegates
OpenNext deployments before its custom build hook. The source custom build still
supports `npx wrangler preview` and local Worker development.

The site does not use ISR or cache revalidation, so the adapter uses its native
dummy cache and queue implementations. Preview bindings intentionally omit the
production self service: Cloudflare Preview service bindings target production.
Revisit this choice if revalidation is introduced.
