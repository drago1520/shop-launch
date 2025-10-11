//Here's where the rubber hits the road. We define API routes here for tRPC.
import { router, publicProcedure } from './server-trpc';

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return 'Hello from tRPC!';
  }),
});

export type AppRouter = typeof appRouter;
