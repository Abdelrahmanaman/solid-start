import { auth } from "@/lib/auth";
import { toSolidStartHandler } from "better-auth/solid-start";
import type { RequestEvent } from "solid-js/web";

const handlers = toSolidStartHandler(auth);
export const GET = (event: RequestEvent) => {
	console.log("GET request received:", event.request.url);
	return handlers.GET(event);
};
export const POST = (event: RequestEvent) => {
	console.log("POST request received:", event.request.url);
	return handlers.POST(event);
};
