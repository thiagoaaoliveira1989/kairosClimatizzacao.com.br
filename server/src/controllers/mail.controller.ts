import { Request, Response } from "express";
import { MailServices } from "../services/mail.services";

export class MailController {
    private mailService = new MailServices();

    sendEmail = (req: Request, res: Response): Response => {
        const newMail = this.mailService.sendMail(req.body);

        return res.status(201).json(newMail)
    }
}