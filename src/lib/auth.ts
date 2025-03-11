import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../../db/drizzle/db";

const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),

	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			enabled: true,
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		},
	},
});

export default auth;
