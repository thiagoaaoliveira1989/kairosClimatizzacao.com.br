import { z } from 'zod';
import { contactFormSchema } from './contactFormSchema';

export const individualClientSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  cpf: z.string().min(1),
  dateOfBirth: z.date(),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  contractNumber: z.string().min(1),
  contactForms: z.array(contactFormSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createIndividualClientSchema = individualClientSchema.omit({ id: true });

export const updateIndividualClientSchema = createIndividualClientSchema.partial();
