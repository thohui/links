import superjson from "superjson";
import { createRouter } from "./context";
import { linkRouter } from "./router/link";
export const appRouter = createRouter()
  .transformer(superjson)
  .merge("link.", linkRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
