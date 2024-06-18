import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchByStateRouter = createTRPCRouter({
    list: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.searchByState.findMany();
        }),

        //this api will add state
    create: publicProcedure
        .input(z.object({
            stateName: z.string(),
            latitude: z.string(),
            longitude: z.string(),
        })).mutation(async ({ ctx, input }) => {
            try {
                const response = await ctx.prisma.searchByState.create({
                    data: {
                        stateName: input.stateName,
                        latitude:input.latitude,
                        longitude: input.longitude
                    }
                })
                return response;
            } catch (error: any) {
                throw new Error(error);
            }
        })
})