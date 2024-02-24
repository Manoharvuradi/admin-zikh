import { createTRPCRouter } from "~/server/api/trpc";
import { searchByCityRouter } from "./routers/searchByCity";
import { searchByStateRouter } from "./routers/searchByState";
import { crimeTipRouter } from "./routers/crimetip";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  searchByCity: searchByCityRouter,
  searchByState: searchByStateRouter,
  crimeTip: crimeTipRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
