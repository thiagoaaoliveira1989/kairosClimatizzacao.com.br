import { Request, Response } from "express";
import { IndividualClientService } from "../services/individualClient.services"

export class IndividualClientController {
    private service = new IndividualClientService();

    public create = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.service.create(req.body))
    }
    public findMany = async (_: Request, res: Response): Promise<Response> => {
        return res.status(200).json(await this.service.findMany())

    }
    public FindId = async (req: Request, res: Response): Promise<Response> => {
        const { indivClientId } = req.params;
        const id = Number(indivClientId);
        return res.status(200).json(await this.service.FindId(id))

    }
    public update = async (req: Request, res: Response): Promise<Response> => {
        const { indivClientId } = req.params;
        const id = Number(indivClientId);
        return res.status(200).json(await this.service.update(id, req.body))

    }
    public delete = async (req: Request, res: Response): Promise<Response> => {
        const { indivClientId } = req.params;
        const id = Number(indivClientId);
        await this.service.delete(id)
        return res.status(200).json()

    }
}