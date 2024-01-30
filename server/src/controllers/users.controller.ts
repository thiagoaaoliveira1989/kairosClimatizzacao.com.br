import { UsersServices } from "../services/users.services";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export class UsersController {
    private usersService = new UsersServices();

    createUser = (req: Request, res: Response): Response => {
        const newUser = this.usersService.createUser(req.body);
        console.log(newUser);
        return res.status(201).json(newUser);

    }


    findAllUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const allUsers = await this.usersService.findAllUsers();
            return res.status(200).json({ allUsers });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    findUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = req.params.id;
        console.log(userId);

        try {
            const userFind = await this.usersService.findUser(Number(userId));
            return res.status(200).json({ userFind });
        } catch (error: any) {
            console.log(error);

            if (error.message.includes('not found')) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };

    login = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body;

        try {
            // Encontrar o usuário pelo email e senha
            const user = await this.usersService.findUserByEmailAndPassword(email, password);

            // Verificar se o usuário é um administrador
            if (user.admin) {
                // Criar um token
                const token = jwt.sign({ userId: user.id, email: user.email }, 'seu_segredo_secreto', {
                    expiresIn: '1h' // Defina a expiração do token conforme necessário
                });

                return res.status(200).json({ message: 'Login successful', user, token });
            } else {
                return res.status(403).json({ error: 'Unauthorized: User is not an admin' });
            }
        } catch (error) {
            console.log(error);
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    };



}
