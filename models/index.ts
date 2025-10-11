import { drizzle } from 'drizzle-orm/mysql2';
import * as inmartaTables from '@/models/drizzle-inmarta/schema';
import * as iimartaTables from '@/models/drizzle-iimarta/schema';
import * as imartapTables from '@/models/drizzle-imartap/schema';
import mysql from 'mysql2/promise';

const inmartaConnection = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
});
const inmartaSchema = { ...inmartaTables }; //add relationships if any
/**
 * @description inmarta или друга за специфичния език.
 */
export const db = drizzle({ client: inmartaConnection, schema: inmartaSchema, mode: 'default' });

// Log connection (but not the full URL for security)
console.log(`Connected to database at ${new URL(process.env.DATABASE_URL!).host}`);
