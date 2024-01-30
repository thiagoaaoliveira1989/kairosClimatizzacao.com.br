import express, { json, Request, Response } from 'express';
import cors from 'cors';
import { mailRouter } from './routes/mail.routes';
import { HandleErrors } from './middlewares/handleErrors.middleware';
import helmet from 'helmet';
import { agendamentoRouter } from './routes/agendamento.routes';
import { usersRouter } from './routes/users.routes';

const app = express();
app.use(helmet());

app.use(json());
app.use(cors());


app.use("/", mailRouter);
app.use("/", agendamentoRouter);
app.use("/", usersRouter);

app.use(HandleErrors.execute);



const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
