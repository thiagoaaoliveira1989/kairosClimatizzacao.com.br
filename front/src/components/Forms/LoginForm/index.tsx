import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import { loginFormSchema } from "./loginForm.schema";
import { IUsers } from '../../../interfaces/user.interface';
import { UserContext } from "../../../providers/UserContext";

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUsers>({
        resolver: zodResolver(loginFormSchema),
    });

    const context = useContext(UserContext);
    const { userLogin } = context as { userLogin: (data: IUsers) => void };

    const submit = (data: IUsers) => {
        userLogin(data);
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="my-[1rem] w-[90%] lg:w-[50%]  mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col gap-8"
        >
            <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email ? { message: errors.email.message! } : undefined}
            />
            <Input
                label="Password"
                type="password"
                id="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={errors.password ? { message: errors.password.message! } : undefined}
            />
            <button className="bg-primary p-[1.2rem] font-bold text-white" type="submit">Enviar</button>
        </form>
    );
};
