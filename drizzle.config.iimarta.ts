import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './models/drizzle-iimarta',
  schema: './models/schema-iimarta/*',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL_iimarta!,
  },
});
