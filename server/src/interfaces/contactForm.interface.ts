import { z } from "zod";
import { contactFormSchema, createContactFormSchema, updateContactFormSchema } from "../schemas/contactFormSchema";

export type IReturnContactForm = z.infer<typeof contactFormSchema>;

export type ICreateContactForm = z.infer<typeof createContactFormSchema>;

export type IUpdateContactForm = z.infer<typeof updateContactFormSchema>;