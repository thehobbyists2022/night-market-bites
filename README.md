# Night Market Bites

Seven Asian night markets in one app: Taiwan, Thailand, Japan, Korea, Malaysia, the Philippines and Vietnam — 130+ street-food recipes, local order cards, taste passport and pocket list. English-first UI, 8 languages.

- Live site: https://night-market-bites.vercel.app
- Tech: Vite + React + TypeScript + Tailwind + Capacitor (iOS)
- iOS pipeline: GitHub Actions (`Build & Upload iOS to App Store Connect`)
- Data packs are auto-generated from the seven source country apps by `scripts/merge_recipes.cjs` (sources are read-only).

## Dev

```bash
npm install
npm run dev
npm run build
```

See `AUDIT_AND_PLAN.md` and `appstore_metadata.md` for the App Store submission trail.
