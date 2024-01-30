import { pool } from "../database";
import { TCreateAgendamento } from "../interfaces/agendamento.interface";

export class AgendamentoService {
    async createAgendamento(data: TCreateAgendamento) {
        const { name, telefone, date, time, logradouro, numero, bairro, cidade, referencia } = data;
        const createdAt = new Date();
        const updatedAt = new Date();

        const query = `
          INSERT INTO appointments("name", "telefone", "date", "time", "logradouro", "numero", "bairro", "cidade", "referencia", "createdAt", "updatedAt")
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING *`;
        const values = [name, telefone, date, time, logradouro, numero, bairro, cidade, referencia, createdAt, updatedAt];

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao executar a consulta SQL:', error);
            throw error; // Rejeita a promessa para que o erro seja tratado pelo código que chama essa função
        }
    }
}
