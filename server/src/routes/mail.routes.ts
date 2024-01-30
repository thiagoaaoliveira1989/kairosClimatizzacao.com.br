import { Router } from "express";
import { MailController } from "../controllers/mail.controller";

export const mailRouter = Router();

const mailController = new MailController();

mailRouter.post('/api/send-email', mailController.sendEmail);