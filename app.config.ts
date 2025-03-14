import { defineConfig } from "@solidjs/start/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	vite: {
		plugins: [
			TanStackRouterVite({
				target: "solid",
				routeFileIgnorePattern: "api/*",
			}),

			tailwindcss(),
			viteTsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
		],
	},
});
