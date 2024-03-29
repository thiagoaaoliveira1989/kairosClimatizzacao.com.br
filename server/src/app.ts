import cors from "cors";
import express, { Application, json } from "express";
import "express-async-errors";
import helmet from "helmet";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { mailRouter } from "./routes/mail.routes";
import { usersRouter } from "./routes/users.routes";
import { contactFormRouter } from "./routes/contactForm.routes";
import { individualClientRouter } from "./routes/individualClient.routes";

export const app: Application = express();


app.use(cors());
app.use(helmet());
app.use(json());

app.use("/", mailRouter);
app.use("/api/users", usersRouter);
app.use("/api/contact", contactFormRouter);
app.use("/api/indivclient", individualClientRouter);


app.use(handleErrors);

