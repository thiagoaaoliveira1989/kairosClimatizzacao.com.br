import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

class HandleErrorMiddleware {
    static execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        }

        if (err instanceof ZodError) {
            return res.status(400).json({ message: err.errors });
        }

        if (err instanceof JsonWebTokenError) {
            return res.status(403).json({ message: err.message });
        }

        console.log(err.message, err.name);

        return res.status(500).json({ error: "Internal server error." });
    };
}

export const handleErrors = HandleErrorMiddleware.execute;

