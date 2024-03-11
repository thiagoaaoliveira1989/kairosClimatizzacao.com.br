import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from '../errors/AppError';

class AuthMiddleware {
  public isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new AppError("Token is required", 401);
    }

    const [_bearer, token] = authorization.split(" ");

    const secret = process.env.SECRET_KEY!;

    try {
      const decoded = verify(token, secret);
      res.locals = {
        ...res.locals,
        decoded,
      };
      next();
    } catch (error) {
      throw new AppError("Invalid token", 401);
    }
  }

}






















