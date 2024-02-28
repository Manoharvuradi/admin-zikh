import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { NextApiRequest, NextApiResponse } from "next";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

const CrimeTipHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("inside handler", req.body);
    const ctx = await createTRPCContext({req,res});
    const caller = appRouter.createCaller(ctx);
    if(req.method === "POST"){
        try{
            const crimeTip = await caller.crimeTip.create(req.body.crimeTipRegistrationState);
            console.log("crimeTip", crimeTip);
            res.status(200).json({ status: true, data: crimeTip });
        }catch(cause){
            if (cause instanceof TRPCError) {
                const httpCode = getHTTPStatusCodeFromError(cause);
                if (httpCode === 400) {
                    let errorMessage = JSON.parse(cause.message);
                    cause.message = errorMessage;
                }
                return res
                    .status(httpCode)
                    .json({ status: false, message: cause.message });
            }
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    }else{
        res.status(405).json({ status: false, message: "Method Not Allowed" });
    }
}

export default CrimeTipHandler;