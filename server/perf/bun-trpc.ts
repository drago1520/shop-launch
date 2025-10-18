import { appRouter } from '@/server';
import { createBunServeHandler } from 'trpc-bun-adapter';

// Minimal Bun + tRPC handler wiring. Using `appRouter` exported from `server/index.ts`.
Bun.serve(
  createBunServeHandler(
    {
      router: appRouter,
      createContext: () => ({}),
    },
    {
      port: 3004,
      hostname: '192.168.0.3',
    },
  ),
);

console.log('Server running at http://192.168.0.3:3004');
