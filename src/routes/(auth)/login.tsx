import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/(auth)/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<form action="">
				<input type="text" name="email" />
				<input type="password" name="password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
