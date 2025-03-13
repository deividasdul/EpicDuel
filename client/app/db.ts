import pg from "pg";

const pool = new pg.Pool({
  database: "epicduel",
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
});

export default pool;
