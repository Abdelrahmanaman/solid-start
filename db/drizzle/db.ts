import "dotenv/config"; // Automatically loads environment variables from .env
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
	url: process.env.DB_FILE_NAME || "file:./db/database.sqlite",
});

const db = drizzle(client);

export default db;
