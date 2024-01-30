
import { z } from "zod"
import { clienteSchema, createClienteSchema, updateClienteSchema } from "../schemas/cliente.schemas";

export type TCliente = z.infer<typeof clienteSchema>;

export type TCreateCliente = z.infer<typeof createClienteSchema>;

export type TUpdateCliente = z.infer<typeof updateClienteSchema>;