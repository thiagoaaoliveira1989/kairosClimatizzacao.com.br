import { z } from 'zod';

export const mailSchema = z.object({
    nome: z.string().min(5),
    email: z.string().min(5).email(),
    telefone: z.string().min(9),
    assunto: z.string().min(2),
    mensagem: z.string().min(5)
})

