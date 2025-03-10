import { twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});

export const { signIn, signOut, useSession, signUp, getSession } = authClient;
