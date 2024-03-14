import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { prisma } from "../database";
import { DynamicParamsIdFinder, PrismaClientGeneric } from "../interfaces/utils.interface";

class EnsureMiddleware {

    public validBody = (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                req.body = schema.parse(req.body);
                return next();
            } catch (error) {
                if (error instanceof ZodError) {
                    console.log(error.message);

                    throw new AppError('Invalid request body', 400);
                }
            }
        };
    
    public paramsIdExists = ({ searchKey, error, model }: DynamicParamsIdFinder) => async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {

        const id = Number(req.params[searchKey]);
        const client = prisma[model] as PrismaClientGeneric;

        const foundData = await client.findFirst({
            where: { id }
        });

        if (!foundData) {
            throw new AppError(error, 404);
        }

        res.locals = { ...res.locals, foundData };

        return next();
    };

    public paramsUserIdExists = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const { userId } = req.params;

        const foundUser = await prisma.user.findFirst({
            where: { id: Number(userId) }
        });

        if (!foundUser) {
            throw new AppError("User not found!", 404);
        }

        res.locals = { ...res.locals, foundUser };

        return next();
    };

    public emailIsExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { foundUser } = res.locals;

    }

}

export const ensure = new EnsureMiddleware();