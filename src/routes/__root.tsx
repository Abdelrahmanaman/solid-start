import {
	HeadContent,
	Link,
	Outlet,
	createRootRouteWithContext,
} from "@tanstack/solid-router";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { clientOnly } from "@solidjs/start";
import { Suspense } from "solid-js";
import type { User } from "better-auth";
import type { QueryClient } from "@tanstack/solid-query";
import { getUserQuery } from "@/services/auth";
import Navbar from "@/components/header/navbar";

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
			<HeadContent />
			<Navbar />
			<Link to="/">Index</Link>
			<Link to="/about">About</Link>
			<Suspense>
				<Outlet />
				<Devtools />
				<SolidQueryDevtools />
			</Suspense>
		</>
	);
}
