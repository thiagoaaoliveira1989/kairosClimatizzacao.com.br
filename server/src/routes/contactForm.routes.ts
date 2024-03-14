import { Router } from "express";
import { ContactFormController } from "../controllers/contactForm.controller";
import { auth } from "../middlewares/auth.middleware";

export const contactFormRouter = Router();
const controller = new ContactFormController();

contactFormRouter.post("", controller.create)
contactFormRouter.get("", auth.isAuthenticated, controller.findMany)
contactFormRouter.delete("/:contactId", auth.isAuthenticated, controller.delete)