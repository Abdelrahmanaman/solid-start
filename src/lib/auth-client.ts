import { twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/solid";

const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
});

export const { signIn, signOut, useSession, signUp, getSession } = authClient;
