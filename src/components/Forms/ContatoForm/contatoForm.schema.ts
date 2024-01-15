import { z } from 'zod';

export const contatoFormSchema = z.object({
    nome: z.string().min(5, "Nome é obrigatorio"),
    email: z.string().email("Forneça um email válido").min(1, "O email é obrigatorio"),
    telefone: z.string().min(11, "Insira o telefone no seguinte formato DD999990000, com 11 digitos"),
    assunto: z.string().min(5, "Assunto é obrigatorio"),
    mensagem: z.string().min(10, "mensagem é obrigatorio")
})