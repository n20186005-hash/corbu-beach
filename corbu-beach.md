# Corbu Beach visitor guide

The bilingual source is maintained in `src/messages` and `src/data/guides.ts`.
Visitor source links and check dates are visible on the pages.
Existing gallery files are retained.

## Native Cloudflare build

The source pins Next.js 15.5.29, next-intl 4.9.2, OpenNext 1.20.16 and
Wrangler 4.160.0 in the npm lockfile.

Run `npm ci`, then `npm run typecheck`, `npm run lint` and `npm run check:content`.
`npm run build` remains the Next.js build. `npm run build:worker` packages the app
with the pinned OpenNext adapter; `npm run preview:local` runs the native local
Worker. Wrangler's custom build invokes that packaging step before its normal
`npx wrangler preview` or `npx wrangler deploy` command.

The site does not use ISR or cache revalidation, so the adapter uses its native
dummy cache and queue implementations. Preview bindings intentionally omit the
production self service: Cloudflare Preview service bindings target production.
Revisit this choice if revalidation is introduced.
