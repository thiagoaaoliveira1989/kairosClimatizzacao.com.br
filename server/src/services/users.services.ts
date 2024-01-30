import { pool } from "../database";
import { TUser } from "../interfaces/users.interface";

export class UsersServices {
    async createUser(user: TUser) {
        const { name, email, password, admin } = user;
        const createdAt = new Date();
        const updatedAt = new Date();

        const query = `
        INSERT INTO usuarios ("name", "email", "password", "admin", "createdAt", "updatedAt")
        VALUES($1, $2, $3, $4, $5, $6 )
        RETURNING *`;

        const values = [name, email, password, admin ? admin : false, createdAt, updatedAt]

        try {
            const result = await pool.query(query, values);
            return result.rows[0];

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findAllUsers() {
        const query = `SELECT * FROM "usuarios";`;

        try {
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findUser(id: number) {
        const query = `
            SELECT u.*
            FROM "usuarios" u
            WHERE "id" = $1;`;
    
        try {
            const result = await pool.query(query, [id]);
            const user = result.rows[0];
    
            if (!user) {
                throw new Error(`User with ID ${id} not found`);
            }
    
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findUserByEmailAndPassword(email: string, password: string): Promise<TUser> {
        const query = `
            SELECT *
            FROM "usuarios"
            WHERE "email" = $1 AND "password" = $2;`;

        try {
            const result = await pool.query(query, [email, password]);
            const user = result.rows[0];

            if (!user) {
                throw new Error('Invalid credentials');
            }

            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }   


}