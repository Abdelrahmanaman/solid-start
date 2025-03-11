import {
	Link,
	Outlet,
	createRootRoute,
	createRootRouteWithContext,
} from "@tanstack/solid-router";

import { clientOnly } from "@solidjs/start";
import { Suspense } from "solid-js";
import type { User } from "better-auth";
import type { QueryClient } from "@tanstack/solid-query";
import { getUserQuery } from "@/services/auth";

const Devtools = clientOnly(() => import("../components/Devtools"));

export const Route = createRootRouteWithContext<{
	user: User | null;
	queryClient: QueryClient;
}>()({
	component: RootComponent,
	beforeLoad: async ({ context }) => {
		const user = await context.queryClient.fetchQuery(getUserQuery());
		return { user };
	},
});

function RootComponent() {
	return (
		<>
			<Link to="/">Index</Link>
			<Link to="/about">About</Link>
			<Suspense>
				<Outlet />
				<Devtools />
			</Suspense>
		</>
	);
}
