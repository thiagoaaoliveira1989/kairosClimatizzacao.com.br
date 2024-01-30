import { z } from 'zod';

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(8),
    admin: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date()
})


export const createUserchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateUserSchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true}).partial();

