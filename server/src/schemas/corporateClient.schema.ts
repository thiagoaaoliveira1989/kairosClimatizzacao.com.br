import { z } from 'zod';

export const corporateClientSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  cnpj: z.string().min(1),
  stateRegistration: z.string().min(1),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  contractNumber: z.string().min(1),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createCorporateClientSchema = corporateClientSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateCorporateClientSchema = createCorporateClientSchema.partial();

export const returnCorporateClientSchema = corporateClientSchema;
