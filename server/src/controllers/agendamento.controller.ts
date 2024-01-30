import { Request, Response } from "express";
import { AgendamentoService } from "../services/agendamento.services";

export class AgendamentoController {
    private agendamentoService = new AgendamentoService();

    createAgendamento = (req: Request, res: Response) => {
        const newAgendamento = this.agendamentoService.createAgendamento(req.body);
        
        return res.status(201).json(newAgendamento);

    }
}




