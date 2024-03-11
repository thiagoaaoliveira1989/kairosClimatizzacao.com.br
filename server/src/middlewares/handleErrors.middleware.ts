import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

 class HandleErrorMiddleware {
    static execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        }

        return res.status(500).json({ error: "Internal server error." });
    };
}

export const handleErrors = HandleErrorMiddleware.execute;

