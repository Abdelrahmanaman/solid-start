import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./db/drizzle",
	schema: "./db/drizzle/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DB_FILE_NAME || "file:./db/database.sqlite",
	},
});
