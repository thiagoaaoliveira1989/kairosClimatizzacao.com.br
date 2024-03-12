import { z } from "zod";
import { visitScheduleSchema } from "./visitSchedule.schema";
import { technicalSupportTicketSchema } from "./technicalSupportTicket.schema";

// Enumeração para os tipos de formulário
export const contactFormTypeEnum = z.enum(['general', 'schedule', 'emergency', 'commonContactForm']);

// Esquema principal para formulários de contato
export const contactFormSchema = z.object({
  id: z.number().positive(),
  type: contactFormTypeEnum,
  details: z.string(),
  name: z.string().min(1).nullable(),
  email: z.string().email().min(1).nullable(),
  phoneNumber: z.string().min(1).nullable(),
  subject: z.string().min(1).nullable(),
  message: z.string().min(1).nullable(),
  visitSchedules: z.array(visitScheduleSchema).nullable(),
  technicalSupportTickets: z.array(technicalSupportTicketSchema).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// Esquema para criar um formulário de contato
export const createContactFormSchema = contactFormSchema.omit({ id: true });

// Esquema para atualizar um formulário de contato
export const updateContactFormSchema = createContactFormSchema.partial();

// Esquema para atualizar um formulário de contato

export const returnContatFormSchema = contactFormSchema;