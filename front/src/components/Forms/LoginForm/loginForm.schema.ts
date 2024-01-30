import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().email("Forneça um email válido").min(1, "O email é obrigatorio"),
    password: z.string().min(1, "O password é obrigatorio")
})