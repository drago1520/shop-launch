import { appRouter } from '@/server';
import { createBunServeHandler } from 'trpc-bun-adapter';

// Minimal Bun + tRPC handler wiring. Using `appRouter` exported from `server/index.ts`.
Bun.serve(
  createBunServeHandler({
    router: appRouter,
    createContext: () => ({}),
  }),
);

console.log('Server running at http://localhost:3000');
