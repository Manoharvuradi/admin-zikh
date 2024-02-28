import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchByStateRouter = createTRPCRouter({
    list: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.searchByState.findMany();
        }),
    create: publicProcedure
        .input(z.object({
            stateName: z.string(),
            latitude: z.number(),
            longitude: z.number(),
        })).mutation(async ({ ctx, input }) => {
            console.log("input", input);
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