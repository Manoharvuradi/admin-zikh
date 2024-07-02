import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { convertToObjectWithCreate } from "~/utils/helpers";

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
            cities: z.array(z.object({
                cityName: z.string(),
                latitude: z.string(),
                longitude: z.string(),
            })),
        })).mutation(async ({ ctx, input }) => {
            try {
                const formattedCities = convertToObjectWithCreate(input.cities);
                const response = await ctx.prisma.searchByState.create({
                    data: {
                        stateName: input.stateName,
                        latitude:input.latitude,
                        longitude: input.longitude,
                        seachByCity: formattedCities
                    }
                })
                return response;
            } catch (error: any) {
                throw new Error(error);
            }
        }),
    update: publicProcedure
        .input(z.object({
            id: z.number(),
            body: searchByStateSchema()
        })).mutation(async({ctx, input})=>{
            const formattedCities = convertToObjectWithCreate(input.body.cities);
            const response = await ctx.prisma.searchByState.update({
                where: {
                    id: input.id
                },
                data: {
                    stateName: input.body.stateName,
                    latitude:input.body.latitude,
                    longitude: input.body.longitude,
                    seachByCity: formattedCities
                }
            })
            return response;
        })
})

function searchByStateSchema(){
   return z.object({
        stateName: z.string(),
        latitude: z.string(),
        longitude: z.string(),
        cities: z.array(z.object({
            cityName: z.string(),
            latitude: z.string(),
            longitude: z.string(),
        })),
    })
}