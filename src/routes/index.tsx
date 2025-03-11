import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<h1 class="text-5xl">Hello world!</h1>

			<p>Hello Abdelrahman</p>
			<span class="bg-red-500">Hello wold</span>
		</main>
	);
}
