//Here's where the rubber hits the road. We define API routes here for tRPC.
import { publicProcedure, router } from './server-trpc';
import { db } from '@/models';
import { catalog } from '@/models/drizzle-inmarta/schema';

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    const data = await db.select().from(catalog).limit(10);
    return `Hello mom! ${data[0].ime}`;
  }),
});

export type AppRouter = typeof appRouter;
