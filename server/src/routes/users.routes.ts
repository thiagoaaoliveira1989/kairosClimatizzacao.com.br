import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

export const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/api/users', usersController.createUser);
usersRouter.get('/api/users', usersController.findAllUsers);

usersRouter.post('/api/users/login', usersController.login);


usersRouter.get('/api/users/:id', usersController.findUser);
