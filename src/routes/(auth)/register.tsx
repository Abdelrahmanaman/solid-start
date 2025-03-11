import { signIn, signUp } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/solid-router";
import { createSignal } from "solid-js";

export const Route = createFileRoute("/(auth)/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const [formData, setFormData] = createSignal({
		name: "",
		email: "",
		password: "",
	});

	// Handle input changes
	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const { name, value } = target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		try {
			const { data, error } = await signUp.email({
				email: "test@example.com",
				password: "password1234",
				name: "test",
				image: "https://example.com/image.png",
			});

			if (error) {
				console.error("Registration error:", error);
				// Handle error appropriately (e.g., display error message)
			} else {
				console.log("Registration successful:", data);
				// Handle success (e.g., redirect or show success message)
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			// Handle unexpected errors
		}
	};

	return (
		<div>
			<button
				type="button"
				class="btn-circle"
				onClick={async () => {
					signIn.social({
						provider: "google",
						callbackURL: "/register",
					});
				}}
			>
				Login google
			</button>
			<form onSubmit={handleSubmit} class="mx-auto max-w-4xl flex gap-2">
				<input
					class="input"
					type="text"
					name="name"
					id="name"
					value={formData().name}
					onInput={handleInput}
					placeholder="Name"
				/>
				<input
					class="input"
					type="email"
					name="email"
					id="email"
					value={formData().email}
					onInput={handleInput}
					placeholder="Email"
				/>
				<input
					class="input"
					type="password"
					name="password"
					id="password"
					value={formData().password}
					onInput={handleInput}
					placeholder="Password"
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
