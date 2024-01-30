import { Router } from 'express';
import { AgendamentoController } from '../controllers/agendamento.controller';

export const agendamentoRouter = Router();

const agendamentoController = new AgendamentoController();

agendamentoRouter.post('/api/agendamento', agendamentoController.createAgendamento);