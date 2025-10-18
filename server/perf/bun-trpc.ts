import { appRouter } from '@/server';
import { createBunServeHandler } from 'trpc-bun-adapter';

//!MySQL was IP restricted
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
      port: 3000,
    },
  ),
);

console.log('Server running at http://localhost:3000');
