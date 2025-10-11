import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './models/drizzle-inmarta',
  schema: './models/schema-inmarta/*',
  dialect: 'mysql',
  dbCredentials: {
    url: `${process.env.DATABASE_URL}inmarta`,
  },
});
