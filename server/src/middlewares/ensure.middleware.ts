import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../errors/AppError";

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


}

export const ensure = new EnsureMiddleware();