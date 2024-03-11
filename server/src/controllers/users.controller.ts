import { UsersServices } from "../services/users.services";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export class UsersController {
    private usersService = new UsersServices();

    createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = await this.usersService.createUser(req.body);
            return res.status(201).json({ message: 'User Created successful', user });
        } catch (error: any) {
            if (error.message === 'Email already exists') {
                return res.status(400).json({ error: 'Email already exists' });
            }
            return res.status(500).json({ error: 'Error creating user' });
        }
    };

    findAllUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const users = await this.usersService.findAllUsers();
            return res.status(200).json({ users });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    findUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = req.params.id;

        try {
            const user = await this.usersService.findUser(Number(userId));
            return res.status(200).json({ user });
        } catch (error: any) {
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
            const user = await this.usersService.login(email, password);

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

    deleteUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = req.params.id;

        try {
            const user = await this.usersService.deleteUser(Number(userId));
            return res.status(200).json({ user });

        } catch (error: any) {

            if (error.message.includes('not found')) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    updateUser = async (req: Request, res: Response): Promise<Response> => {
        const userId = req.params.id;
        const data = req.body;

        try {
            const user = await this.usersService.updateUser(Number(userId), data);
            return res.status(200).json({ user });

        } catch (error: any) {

            if (error.message.includes('not found')) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

}
