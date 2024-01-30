
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kairos',
  password: '485201',
  port: 5432,
});
