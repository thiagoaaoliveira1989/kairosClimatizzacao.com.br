
import { z } from "zod"
import { createUserchema, loginUserSchema, returnLoginSchema, returnUserSchema, updateUserSchema } from "../schemas/user.schemas";


export type IReturnUser = z.infer<typeof returnUserSchema>;

export type ICreateUser = z.infer<typeof createUserchema>;

export type IUpdateUser = z.infer<typeof updateUserSchema>;

export type ILoginUser = z.infer<typeof loginUserSchema>;

export type IReturnLoginUser = z.infer<typeof returnLoginSchema>;