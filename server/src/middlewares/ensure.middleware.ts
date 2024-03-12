import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { prisma } from "../database";

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
}

export const ensure = new EnsureMiddleware();