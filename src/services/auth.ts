import { signIn, signOut } from "@/lib/auth-client";
import {
	createMutation,
	queryOptions,
	useQueryClient,
} from "@tanstack/solid-query";
import { useRouter } from "@tanstack/solid-router";
import { auth } from "@/lib/auth";
import { getRequestEvent } from "solid-js/web";
// Invalidate auth queries
const useInvalidateAuth = (destination?: string) => {
	const router = useRouter();
	const queryClient = useQueryClient();

	return async () => {
		await queryClient.invalidateQueries(getUserQuery());
		await router.invalidate();
		if (destination) {
			router.navigate({ to: destination });
		}
	};
};

export const getUser = async () => {
	"use server";
	const event = getRequestEvent();

	if (!event) throw new Error("No request found");

	const result = await auth.api.getSession({ headers: event.request.headers });
	return result?.user ?? null;
};

export const getUserQuery = () => {
	return queryOptions({
		queryKey: ["user"],
		queryFn: async () => {
			const users = await getUser();
			console.log(users);
			return {
				users,
			};
		},
		staleTime: 5 * 60 * 1000, // 5 minutes before data is stale
		gcTime: 30 * 60 * 1000, // 30 minutes before garbage collectionn
	});
};

export const useSignInMutation = () => {
	const invalidateAuth = useInvalidateAuth("/profile");
	return createMutation(() => ({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			signIn.email({
				email,
				password,
			}),
		onSuccess: () => {
			invalidateAuth();
		},
		onError: (error) => {
			console.error("Sign-in failed:", error);
		},
	}));
};

export const useSignOutMutation = () => {
	const invalidateAuth = useInvalidateAuth("/login");
	return createMutation(() => ({
		mutationFn: () => signOut(),
		onSuccess: () => {
			invalidateAuth();
		},
	}));
};
