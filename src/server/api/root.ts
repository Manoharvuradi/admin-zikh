import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { searchByCityRouter } from "./routers/searchByCity";
import { searchByStateRouter } from "./routers/searchByState";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  searchByCity: searchByCityRouter,
  searchByState: searchByStateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
