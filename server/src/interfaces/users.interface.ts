
import { z } from "zod"
import { createUserchema, updateUserSchema, userSchema } from "../schemas/usuario.schemas";


export type TUser = z.infer<typeof userSchema>;

export type TCreateUser = z.infer<typeof createUserchema>;

export type TUpdateUser = z.infer<typeof updateUserSchema>;