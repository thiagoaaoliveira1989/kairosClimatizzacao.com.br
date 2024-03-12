import { UsersServices } from "../services/users.services";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export class UsersController {
    private usersService = new UsersServices();

    createUser = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.usersService.createUser(req.body));
    }

    findAllUsers = async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).json(await this.usersService.findManyUser());
    }

    findUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = res.locals.decoded.sub
        const user = await this.usersService.findUser(Number(userId));
        return res.status(201).json(user);
    };

    login = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.usersService.login(req.body));
    };

    deleteUser = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.usersService.deleteUser(Number(req.params.userId)));
    }

    updateUser = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.usersService.updateUser(req.body, Number(req.params.userId)));

    }

}
