import { z } from 'zod';

const contactFormTypeEnum = z.enum(['general', 'schedule', 'emergency', 'commonContactForm']);

export const contactFormSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  type: contactFormTypeEnum,
  details: z.string(),
  name: z.string().min(1).nullable(),
  email: z.string().email().min(1).nullable(),
  phoneNumber: z.string().min(1).nullable(),
  subject: z.string().min(1).nullable(),
  message: z.string().min(1).nullable(),
  visitSchedules: z.array(z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    date: z.date(),
    time: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    landmark: z.string(),
  })).nullable(),
  technicalSupportTickets: z.array(z.object({
    id: z.number().positive(),
    contractNumber: z.string(),
    name: z.string().min(1),
    phoneNumber: z.string().min(1),
    reason: z.string().min(1),
  })).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const createContactFormSchema = contactFormSchema.omit({ id: true });

export const updateContactFormSchema = createContactFormSchema.partial();
