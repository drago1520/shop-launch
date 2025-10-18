import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
// import * as inmartaTables from '@/models/drizzle-inmarta/schema';
// import * as iimartaTables from '@/models/drizzle-iimarta/schema';
// import * as imartapTables from '@/models/drizzle-imartap/schema';

// const inmartaSchema = { ...inmartaTables }; //add relationships if any
/**
 * @description inmarta или друга за специфичния език.
 */
// export const db = drizzle({ client: inmartaConnection, schema: inmartaSchema, mode: 'default' }); There's no point adding schema, as there are no relationships between tables + it gets utra heavy on the Typescript
// export const db = drizzle({ client: await getInmarta()});
const poolConnection = mysql.createPool({ uri: process.env.DATABASE_URL! });
export const db = drizzle({ client: poolConnection });

// Log connection (but not the full URL for security)
console.log(`Connected to database at ${new URL(process.env.DATABASE_URL!).host}`);
