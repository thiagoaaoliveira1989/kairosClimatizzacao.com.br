import { Request, Response } from "express";
import { ContactFormService } from "../services/contactForm.services"

export class ContactFormController {
    private service = new ContactFormService();

    public create = async (req: Request, res: Response): Promise<Response> => {
        return res.status(201).json(await this.service.create(req.body))
    }

    public findMany = async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).json(await this.service.findMany())

    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        const { contactId } = req.params;

        await this.service.delete(Number(contactId))

        return res.status(200).json()
    }
}