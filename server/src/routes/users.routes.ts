import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { auth } from '../middlewares/auth.middleware';
import { ensure } from '../middlewares/ensure.middleware';
import { createUserchema } from '../schemas/user.schemas';

export const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('', ensure.validBody(createUserchema), usersController.createUser);
usersRouter.get('', auth.isAuthenticated, usersController.findAllUsers);

usersRouter.post('/login', usersController.login);

usersRouter.use("/:userId", auth.isAuthenticated)

usersRouter.get('/:userId', usersController.findUser);
usersRouter.delete('/:userId', usersController.deleteUser);
usersRouter.put('/:userId', usersController.updateUser);