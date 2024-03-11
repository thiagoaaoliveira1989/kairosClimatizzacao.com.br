import { UsersServices } from "../services/users.services";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export class UsersController {
    private usersService = new UsersServices();

    createUser = async (req: Request, res: Response): Promise<Response> => {
      
    }

    findAllUsers = async (req: Request, res: Response): Promise<Response> => {
      
    }

    findUser = async (req: Request, res: Response): Promise<Response> => {
      
    };

    login = async (req: Request, res: Response): Promise<Response> => {
      
    };

    deleteUser = async (req: Request, res: Response): Promise<Response> => {
      
    }

    updateUser = async (req: Request, res: Response): Promise<Response> => {
      
    }

}
