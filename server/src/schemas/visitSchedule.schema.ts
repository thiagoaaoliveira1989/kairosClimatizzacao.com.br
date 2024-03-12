import { z } from "zod";

// Esquema para representar o agendamento de visitas
export const visitScheduleSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    date: z.date(),
    time: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    landmark: z.string(),
});

// Esquema para criar um agendamento de visita
export const createVisitScheduleSchema = visitScheduleSchema.omit({ id: true });

// Esquema para atualizar um agendamento de visita
export const updateVisitScheduleSchema = visitScheduleSchema.partial();

// Esquema para retornar um agendamento de visita
export const returnVisitScheduleSchema = visitScheduleSchema;
