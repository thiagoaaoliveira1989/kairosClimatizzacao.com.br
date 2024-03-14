import { z } from 'zod';
import { returnUserSchema, userSchema } from './user.schemas';

export const individualClientSchema = z.object({
  id: z.number().positive(),
  cpf: z.string().min(1),
  dateOfBirth: z.date(),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  contractNumber: z.string().min(1),
  userId: z.number().positive().optional(), // Tornando userId opcional
  user: returnUserSchema.nullable(),
  createdAt: z.date().nullable(),
  updatedAt: z.date().nullable()
});

export const createIndividualClientSchema = individualClientSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateIndividualClientSchema = createIndividualClientSchema.partial();

export const returnIndividualClientSchema = individualClientSchema.omit({ userId: true }).extend({ user: returnUserSchema.nullable() });
