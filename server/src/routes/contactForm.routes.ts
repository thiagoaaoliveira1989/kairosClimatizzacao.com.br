import { Router } from "express";
import { ContactFormController } from "../controllers/contactForm.controller";

export const contactFormRouter = Router();
const controller = new ContactFormController();

contactFormRouter.post("", controller.create)
contactFormRouter.get("", controller.findMany)
contactFormRouter.delete("/:contactId", controller.delete)