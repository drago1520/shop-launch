import { appRouter } from '@/server';
import { createBunServeHandler } from 'trpc-bun-adapter';

// Minimal Bun + tRPC handler wiring. Using `appRouter` exported from `server/index.ts`.
Bun.serve(
  createBunServeHandler(
    {
      router: appRouter,
      endpoint: '/trpc',
      createContext: () => ({}),
    },
    {
      fetch(request, server) {
        // will be executed if it's not a TRPC request
        return new Response('Hello world');
      },
    },
  ),
);

console.log('Server running at http://localhost:3000');
