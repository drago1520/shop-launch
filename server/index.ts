//Here's where the rubber hits the road. We define API routes here for tRPC.

import { publicProcedure, router } from './server-trpc';

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return `Hello from tRPC! This is the ${process.env.BETTER_AUTH_SECRET}`;
  }),
});

export type AppRouter = typeof appRouter;
