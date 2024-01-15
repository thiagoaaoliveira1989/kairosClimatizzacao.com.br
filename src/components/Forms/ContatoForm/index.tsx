import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contatoFormSchema } from "./contatoForm.schema";
import Input from "../../Input";
import { sendEmail } from "../../../services/email";

interface FormData {
    nome: string;
    email: string;
    telefone: number;
    assunto: string;
    mensagem: string;
}

export const ContatoForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contatoFormSchema),
    });

    const submit = (data: FormData) => {
        sendEmail(data);
    };

    return (
       <form
        onSubmit={handleSubmit(submit)} 
        className="my-[1rem] w-[90%] lg:w-[50%]  mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col gap-8"
      >
            <Input
                label="Nome"
                type="text"
                id="nome"
                placeholder="Digite aqui seu nome"
                {...register("nome")}
                error={errors.nome ? { message: errors.nome.message! } : undefined}
            />
            <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email ? { message: errors.email.message! } : undefined}
            />
            <Input
                label="Telefone"
                type="text"
                id="telefone"
                placeholder="Digite aqui seu numero de telefone"
                {...register("telefone")}
                error={errors.telefone ? { message: errors.telefone.message! } : undefined}
            />
            <Input
                label="Assunto"
                type="text"
                id="assunto"
                placeholder="Qual assunto?"
                {...register("assunto")}
                error={errors.assunto ? { message: errors.assunto.message! } : undefined}
            />
            <Input
                label="Menssagem"
                type="textarea"
                id="mensagem"
                placeholder="Digite sua mensagem"
                {...register("mensagem")}
                error={errors.mensagem ? { message: errors.mensagem.message! } : undefined}
            />
            <button className="bg-primary p-[1.2rem] font-bold text-white" type="submit">Enviar</button>
        </form>
    );
};
