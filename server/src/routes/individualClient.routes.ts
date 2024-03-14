import { Router } from "express";
import { IndividualClientController } from "../controllers/individualClient.controller";
import { auth } from "../middlewares/auth.middleware";

export const individualClientRouter = Router();

const controller = new IndividualClientController()

individualClientRouter.use("", auth.isAuthenticated)
individualClientRouter.use("/:indivClientId", auth.isAuthenticated)

individualClientRouter.post("", controller.create)
individualClientRouter.get("", controller.findMany)
individualClientRouter.get("/:indivClientId", controller.FindId)
individualClientRouter.get("/:indivClientId", controller.update)
individualClientRouter.get("/:indivClientId", controller.update)
