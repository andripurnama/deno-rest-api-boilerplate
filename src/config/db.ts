// db.ts
import { DataSource } from "../deps.ts";

export const AppDataSource = new DataSource({
  type: Deno.env.get("DB_TYPE"),
  host: Deno.env.get("DB_HOST"),
  port: Deno.env.get("DB_PORT"),
  username: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  database: Deno.env.get("DB_NAME"),
  synchronize: false, // Auto-creates tables (disable in production)
  entities: [
    "src/entities/*.ts"
  ],
  migrations: [
        "src/migrations/*.ts"
  ],
  subscribers: [
    "src/subscribers/*.ts"
  ]
});
