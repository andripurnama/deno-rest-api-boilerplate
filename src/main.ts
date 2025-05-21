import { Application } from "./deps.ts";
import { router } from "./routes/index.ts";
import { ENV } from "./config/env.ts";
import { config } from "./deps.ts";

await config({ export: true });
const app = new Application();

// Global middlewares
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`🚀 Server is running on port ${ENV.PORT}`);
await app.listen({ port: Number(ENV.PORT) });

