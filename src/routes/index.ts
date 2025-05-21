import { Router } from "../deps.ts";
import { userRouter } from "./user.routes.ts";
import { authRouter } from "./auth.routes.ts";

const router = new Router();

router.use("/api/users", userRouter.routes(), userRouter.allowedMethods());
router.use("/api/auth", authRouter.routes(), authRouter.allowedMethods());

export { router };