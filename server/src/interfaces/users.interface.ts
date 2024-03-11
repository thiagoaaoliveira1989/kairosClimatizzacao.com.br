
import { z } from "zod"
import { createUserchema, loginUserSchema, returnLoginSchema, updateUserSchema, userSchema } from "../schemas/user.schemas";


export type IReturnUser = z.infer<typeof userSchema>;

export type ICreateUser = z.infer<typeof createUserchema>;

export type IUpdateUser = z.infer<typeof updateUserSchema>;

export type ILoginUser = z.infer<typeof loginUserSchema>;

export type IReturnLoginUser = z.infer<typeof returnLoginSchema>;