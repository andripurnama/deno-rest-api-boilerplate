import { Router } from "../deps.ts";
// import { getAllUsers } from "../controllers/user.controller.ts";

const userRouter = new Router();

// userRouter
//   .get("/", getAllUsers)
//   .get("/:id", async (ctx) => {
//     const id = ctx.params.id;
//     ctx.response.body = `User ID: ${id}`;
//   });

export { userRouter };