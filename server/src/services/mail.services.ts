import { TSendEmail } from "../interfaces/message.interface";
import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';

export class MailServices {
    async sendMail(data: TSendEmail): Promise<string> {
        const { nome, email, telefone, assunto, mensagem } = data;
        console.log(data)
        if (!nome || !email || !telefone || !assunto || !mensagem) {
            throw new Error('Parâmetros inválidos para o envio de e-mail');
        }

        const transporter: Transporter = nodemailer.createTransport({
            host: 'email-ssl.com.br',
            port: 587, // ou 465, dependendo das configurações do seu serviço de e-mail
            secure: false, // ou true, dependendo das configurações do seu serviço de e-mail
            auth: {
                user: 'contato@kairosclimatizzacao.com.br',
                pass: '@Contato123',
            },
        });

        const mailOptions: SendMailOptions = {
            from: 'contato@kairosclimatizzacao.com.br',
            to: 'contato@kairosclimatizzacao.com.br',
            subject: assunto,
            text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem:\n${mensagem}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return 'E-mail enviado com sucesso';
        } catch (error) {
            throw new Error(`Erro ao enviar e-mail: ${error}`);
        }

    }


}