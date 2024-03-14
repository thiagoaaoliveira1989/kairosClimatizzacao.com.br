import { z } from "zod";

// Esquema principal para formulários de contato
export const contactFormSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  phoneNumber: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

// Esquema para criar um formulário de contato
export const createContactFormSchema = contactFormSchema.omit({ id: true, createdAt: true, updatedAt: true });

// Esquema para atualizar um formulário de contato
export const updateContactFormSchema = createContactFormSchema.partial();

// Esquema para atualizar um formulário de contato

export const returnContatFormSchema = contactFormSchema;