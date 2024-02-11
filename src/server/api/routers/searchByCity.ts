import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchByCityRouter = createTRPCRouter({
    list: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.seachByCity.findMany();
        }),
    create: publicProcedure
        .input(z.object({
            cityName: z.string(),
            searchByStateId: z.number(),
        })).mutation(async ({ ctx, input }) => {
            try {
                const response = await ctx.prisma.seachByCity.create({
                    data: {
                        cityName: input.cityName,
                        searchByStateId: Number(input.searchByStateId)
                    }
                })
                return response;
            } catch (error: any) {
                throw new Error(error);
            }
        })
})