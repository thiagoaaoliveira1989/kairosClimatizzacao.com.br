import { compare, hash } from "bcrypt";
import { prisma } from "../database";
import { ICreateUser, ILoginUser, IReturnLoginUser, IReturnUser, IUpdateUser } from "../interfaces/users.interface";
import { createUserchema, returnUserSchema } from "../schemas/user.schemas";
import { AppError } from "../errors/AppError";
import { sign } from "jsonwebtoken";

export class UsersServices {

    async createUser(payload: ICreateUser): Promise<IReturnUser> {
        if (payload.password) {
            payload.password = await hash(payload.password, 10);
        }
        const newUser = await prisma.user.create({ data: payload })

        return returnUserSchema.parse(newUser);
    }


    async findManyUser(): Promise<IReturnUser[]> {
        const allUser = await prisma.user.findMany()
        return returnUserSchema.array().parse(allUser);
    }

    async findUser(userId: number): Promise<IReturnUser> {
        const user = await prisma.user.findFirst({ where: { id: userId } })
        return returnUserSchema.parse(user);

    }

    async deleteUser(userId: number): Promise<void> {
        await prisma.user.delete({ where: { id: userId } })
    }


    async updateUser(payload: IUpdateUser, userId: number): Promise<IReturnUser> {
        if (payload?.password) {
            payload.password = await hash(payload.password, 10);
        }

        const updateUser = await prisma.user.update({
            where: { id: userId },
            data: { ...payload },
        });

        return returnUserSchema.parse(updateUser);
    }

    async login(payload: ILoginUser): Promise<IReturnLoginUser> {
        const foundUser = await prisma.user.findFirst({ where: { email: payload.email } });

        if (!foundUser) {
            throw new AppError("User not exists", 404);
        }

        const pwdMatch = await compare(payload.password, foundUser.password);

        if (!pwdMatch || foundUser.email !== payload.email) {
            throw new AppError("Email and password doesn't match", 401);
        }

        const secret = process.env.SECRET_KEY!;
        const expiresIn = process.env.EXPIRES_IN!;

        const token = sign({}, secret.toString(), {
            subject: foundUser.id.toString(),
            expiresIn,
        });

        return {
            accessToken: token,
            user: returnUserSchema.parse(foundUser)
        };
    }


}