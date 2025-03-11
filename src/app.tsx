import { queryClient, router } from "./router";
import { RouterProvider } from "@tanstack/solid-router";

import "./app.css";
import { QueryClientProvider } from "@tanstack/solid-query";

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
