
import { z } from "zod"
import { agendamentoSchema, createAgendamentoSchema, updateAgendamentoSchema } from "../schemas/agendamento.schemas";


export type TAgendamento = z.infer<typeof agendamentoSchema>;

export type TCreateAgendamento = z.infer<typeof createAgendamentoSchema>;

export type TUpdateAgendamento = z.infer<typeof updateAgendamentoSchema>;