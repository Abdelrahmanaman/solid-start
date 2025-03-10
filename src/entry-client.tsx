// @refresh reload
import { mount, StartClientTanstack } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
mount(() => <StartClientTanstack />, document.getElementById("app")!);
