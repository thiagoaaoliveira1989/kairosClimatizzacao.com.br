import { z } from 'zod';

export const userSchema = z.object({
    id: z.number().positive(),
    username: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(8),
    admin: z.boolean().default(false),
})


export const createUserchema = userSchema.omit({ id: true });

export const updateUserSchema = createUserchema.optional();

export const returnUserSchema = userSchema.omit({ password: true });

export const loginUserSchema = createUserchema.omit({ username: true, admin: true });

export const returnLoginSchema = z.object({
    accessToken: z.string(),
}).extend({ user: returnUserSchema })

