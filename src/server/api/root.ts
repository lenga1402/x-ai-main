import { createTRPCRouter } from "@/server/api/trpc"

import { stakingRouter } from "./routers/staking"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  staking: stakingRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
