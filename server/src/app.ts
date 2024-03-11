import cors from "cors";
import express, { Application, json } from "express";
import "express-async-errors";
import helmet from "helmet";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { mailRouter } from "./routes/mail.routes";
import { agendamentoRouter } from "./routes/agendamento.routes";
import { usersRouter } from "./routes/users.routes";

export const app: Application = express();


app.use(cors());
app.use(helmet());
app.use(json());

app.use("/", mailRouter);
app.use("/", agendamentoRouter);
app.use("/", usersRouter);


app.use(handleErrors);

