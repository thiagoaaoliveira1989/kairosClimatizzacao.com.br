import { z } from 'zod';
import { contactFormSchema } from './contactFormSchema';

export const technicalSupportTicketSchema = z.object({
  id: z.number().positive(),
  contractNumber: z.string().min(1),
  name: z.string().min(1),
  phoneNumber: z.string().min(1),
  reason: z.string().min(1),
  contactForm: contactFormSchema.nullable(),
  contactFormId: z.number().positive().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createTechnicalSupportTicketSchema = technicalSupportTicketSchema.omit({ id: true });

export const updateTechnicalSupportTicketSchema = createTechnicalSupportTicketSchema.partial();
