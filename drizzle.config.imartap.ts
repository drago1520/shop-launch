import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './models/drizzle-imartap',
  schema: './models/schema-imartap/*',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL_imartap!,
  },
});
