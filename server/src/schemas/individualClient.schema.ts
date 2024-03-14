import { z } from 'zod';
import { returnContatFormSchema } from './contactFormSchema';

export const individualClientSchema = z.object({
  id: z.number().positive(),
  cpf: z.string().min(1),
  dateOfBirth: z.date(),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  contractNumber: z.string().min(1),
  userId: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createIndividualClientSchema = individualClientSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateIndividualClientSchema = createIndividualClientSchema.partial();

export const returnIndividualClientSchema = individualClientSchema;
