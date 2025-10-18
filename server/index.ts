//Here's where the rubber hits the road. We define API routes here for tRPC.
import { drizzle } from 'drizzle-orm/mysql2';
import { publicProcedure, router } from './trpc-boilerplate';
import mysql from 'mysql2/promise';
import { catalog } from '@/server/models/drizzle-inmarta/schema';

//!MySQL was IP restricted
const poolConnection = mysql.createPool({ uri: process.env.DATABASE_URL! });
export const db = drizzle({ client: poolConnection });
console.log(`Connected to database at ${new URL(process.env.DATABASE_URL!).host}`);

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    // const data = await db.select().from(catalog).limit(10);
    return `Hello mom!`;
  }),
  clientMySQL: publicProcedure.query(async () => {
    const start = performance.now();
    const [r] = await db.select().from(catalog).limit(2);
    return `Latency db: ${performance.now() - start} ${r.ime}`;
  }),
});

export type AppRouter = typeof appRouter;
