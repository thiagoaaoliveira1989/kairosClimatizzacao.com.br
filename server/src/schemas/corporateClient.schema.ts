import { z } from 'zod';
import { returnContatFormSchema } from './contactFormSchema';

export const corporateClientSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  cnpj: z.string().min(1),
  stateRegistration: z.string().min(1),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  contractNumber: z.string().min(1),
  contactForms: z.array(returnContatFormSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createCorporateClientSchema = corporateClientSchema.omit({ id: true, contactForms: true });

export const updateCorporateClientSchema = createCorporateClientSchema.partial();

export const returnCorporateClientSchema = corporateClientSchema;
