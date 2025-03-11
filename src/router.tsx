import { createRouter as createTanstackSolidRouter } from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/solid-query";
import type { User } from "better-auth";

const NotFoundComponent = () => <div>404 - Not Found</div>;

export function createRouter(user: User | null = null) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 60 * 1000,
			},
		},
	});

	const router = createTanstackSolidRouter({
		routeTree,
		context: {
			queryClient,
			user,
		},
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: (err) => <div>{err.error.stack}</div>,
		defaultNotFoundComponent: NotFoundComponent,
		scrollRestoration: true,
		defaultViewTransition: true,
	});

	return { router, queryClient };
}

export const { router, queryClient } = createRouter();
// Type safety for router context
declare module "@tanstack/solid-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
