import { z } from 'zod';

export const clienteSchema = z.object({
    client_id: z.number().positive(),
    user_id: z.number().positive(),
    name_company: z.string().min(1),
    cnpj: z.string().min(14).max(18),
    contract_number: z.string().min(1),
    street: z.string().min(1),
    street_number: z.string().min(1),
    neighborhood: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(2).max(2),
    telephone: z.string().min(1),
});

export const createClienteSchema = clienteSchema.omit({ client_id: true });

export const updateClienteSchema = clienteSchema.partial();
