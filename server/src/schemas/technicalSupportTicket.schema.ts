import { z } from "zod";

// Esquema para representar chamados de suporte técnico
export const technicalSupportTicketSchema = z.object({
  id: z.number().positive(),
  contractNumber: z.string(),
  name: z.string().min(1),
  phoneNumber: z.string().min(1),
  reason: z.string().min(1),
});

// Esquema para criar um chamado de suporte técnico
export const createTechnicalSupportTicketSchema = technicalSupportTicketSchema.omit({ id: true });

// Esquema para atualizar um chamado de suporte técnico
export const updateTechnicalSupportTicketSchema = technicalSupportTicketSchema.partial();

// Esquema para retornar um chamado de suporte técnico
export const returnTechnicalSupportTicketSchema = technicalSupportTicketSchema;
