import { z } from 'zod';

export const agendamentoSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    telefone: z.string().min(1),
    date: z.string().min(1),
    time: z.string().min(1),
    logradouro: z.string().min(1),
    numero: z.number().min(1),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    referencia: z.string().min(1),
    createdAt: z.date(),
    updatedAt: z.date()
})


export const createAgendamentoSchema = agendamentoSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateAgendamentoSchema = agendamentoSchema.omit({ id: true, createdAt: true, updatedAt: true}).partial();

