import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { auth } from '../middlewares/auth.middleware';
import { ensure } from '../middlewares/ensure.middleware';
import { createUserchema } from '../schemas/user.schemas';
import { permission } from '../middlewares/permission.middleware';

export const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('', ensure.validBody(createUserchema), usersController.createUser);
usersRouter.get('', auth.isAuthenticated, permission.isAdminOrOwnerUser, usersController.findAllUsers);

usersRouter.post('/login', usersController.login);
usersRouter.get('/profile', auth.isAuthenticated, permission.isAdminOrOwnerUser, usersController.profile);

usersRouter.use("/:userId", ensure.paramsUserIdExists, auth.isAuthenticated, permission.isAdminOrOwnerUser)

usersRouter.get('/:userId', usersController.findUserId);
usersRouter.delete('/:userId', usersController.deleteUser);
usersRouter.put('/:userId', usersController.updateUser);