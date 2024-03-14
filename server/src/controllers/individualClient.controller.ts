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
    public FindId = async (_: Request, res: Response): Promise<Response> => {
        const { foundData } = res.locals;
        const { id } = foundData;
        return res.status(200).json(await this.service.FindId(id))

    }
    public update = async (req: Request, res: Response): Promise<Response> => {
        const { foundData } = res.locals;
        return res.status(200).json(await this.service.update(foundData, req.body))

    }
    public delete = async (_: Request, res: Response): Promise<Response> => {
        const { foundData } = res.locals;
        const { id } = foundData;
        await this.service.delete(id)
        return res.status(200).json()

    }
}