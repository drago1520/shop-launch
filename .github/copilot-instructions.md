## Stack recap

- Expo 54 + React Native 0.81 with Expo Router; global providers (React Query, PostHog, React Navigation theme, @gorhom/bottom-sheet, PortalHost) sit in `app/_layout.tsx`—reuse them instead of wrapping screens locally.
- The `@/*` path alias maps to the repo root (see `tsconfig.json`); import shared code through it to stay consistent.
- Styling tokens live in `global.css` and feed both Nativewind and React Navigation via `lib/theme.ts`.

## Routing & screens

- `app/(tabs)` hosts the tabbed shell; update `components/home-tabs.tsx` whenever you add or rename tab routes to keep the nav buttons aligned.
- Use Expo Router conventions for nested and dynamic routes (`app/p/[id].tsx` shows the pattern with `useLocalSearchParams`).
- Follow existing screens by wrapping content in `SafeAreaView`/`ScrollView` and leaning on shared UI components.

## Styling & UI

- Always prefer primitives from `components/ui/*` (`Text`, `Button`, `Input`, etc.)—they already encode Nativewind classes and accessibility roles through class-variance-authority.
- Render icons through `components/ui/icon` (`<Icon as={ShoppingCart} />`) so cssInterop can translate `className` sizing.
- Theme toggling depends on Nativewind’s `useColorScheme` (`components/theme-toggle.tsx`); avoid duplicating color state.
- When introducing new design tokens, update both `global.css` and `lib/theme.ts` to keep Tailwind and React Navigation in sync.

## Lists, sheets, and portals

- High-volume lists use FlashList (`app/(tabs)/index.tsx`); provide `keyExtractor`, separators, and snap offsets like the sample carousel.
- Bottom sheets rely on the provider from `_layout`; mirror `components/quantity-bottom-sheet.tsx` or `components/tests-bottom-sheet.tsx` for patterns (AsyncStorage persistence, snap points).
- `PortalHost` is already mounted globally, so any overlay components can target it without extra setup.

## Data, auth, analytics

- Better Auth is configured in `lib/auth.ts` with the Drizzle adapter; client-side access goes through `lib/auth-client.ts`, storing session data in `expo-secure-store`.
- Database tables live under `models/schema/*.ts`; modify schemas then push directly with Drizzle (no generated migration files—see `models/README.md`).
- React Query’s `QueryClient` is global; prefer `useQuery`/`useMutation` hooks for server state, and invalidate keys after auth or checkout flows.
- `TrackPosthogPageView` in `_layout` auto-sends screen events; use `usePostHog` for additional analytics when adding flows.

## Dev workflows

- Start the app with `npm run dev` (Expo) or platform shortcuts (`npm run android|ios|web`).
- Database commands: `npm run db:push` (dev), `npm run db:push:prod` (prod), `npm run db:sync` (both), and `npm run db:studio` to inspect data—ensure `DATABASE_URL` is set.
- Lint/format via `npm run lint` and `npm run format`; Husky is configured through `prepare` to keep commits clean.
- In dev, the floating FAB spawns `components/tests-bottom-sheet.tsx`, letting you bookmark routes for quick navigation (state persists in AsyncStorage).

## Environment & config

- Required envs are documented in `.env.example` / `.env.production.example` (Better Auth providers, Resend API key, Postgres URL, etc.).
- `metro.config.js` wraps Metro with `withNativeWind`; keep `global.css` as the single source of design tokens to avoid cache issues.
- Add static assets under `assets/` and import via `require` so Expo bundles them correctly.

## Contribution tips

- Reuse helpers from `lib/utils` (`cn`, `euro`, screen `width/height`) before introducing new utilities.
- Stick to `Text` variants (`variant="h3"`, etc.) for consistent typography and accessibility roles.
- Reserve `app/api/auth/[...all]+api.ts` for Better Auth; add new API routes next to it following Expo Router’s naming if you need additional backend handlers.
