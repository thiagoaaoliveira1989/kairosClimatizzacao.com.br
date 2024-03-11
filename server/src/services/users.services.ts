import { db } from "../database";
import { TUpdateUser, TUser } from "../interfaces/users.interface";
import bcrypt from 'bcrypt';
import { omitPasswordFromUser } from "../utils";
export class UsersServices {

    async createUser(user: TUser) {
        const { name, email, password, admin } = user;
        const createdAt = new Date();
        const updatedAt = new Date();

        // Check for duplicate email
        const existingUser = await this.findUserByEmail(email);
        if (existingUser) {
            throw new Error('Email already exists');
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const query = `
        INSERT INTO usuarios ("name", "email", "password", "admin", "createdAt", "updatedAt")
        VALUES($1, $2, $3, $4, $5, $6 )
        RETURNING *`;

        const values = [name, email, hashedPassword, admin ? admin : false, createdAt, updatedAt];

        try {
            const result = await db.query(query, values);
            const newUser = result.rows[0];

            // Omit the password field using the utility function
            const userWithoutPassword = omitPasswordFromUser(newUser);

            return userWithoutPassword;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findUserByEmail(email: string) {
        const query = `
            SELECT *
            FROM "usuarios"
            WHERE "email" = $1;`;

        try {
            const result = await db.query(query, [email]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async findAllUsers() {
        const query = `SELECT * FROM "usuarios";`;

        try {
            const result = await db.query(query);
            const users = result.rows;

            // Omit the password field using the utility function for each user
            const usersWithoutPassword = users.map(omitPasswordFromUser);

            return usersWithoutPassword;
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
            const result = await db.query(query, [id]);
            const user = result.rows[0];

            if (!user) {
                throw new Error(`User with ID ${id} not found`);
            }

            // Omit the password field using the utility function
            const userWithoutPassword = omitPasswordFromUser(user);

            return userWithoutPassword;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async deleteUser(id: number) {
        const query = `
            DELETE FROM "usuarios"     
            WHERE "id" = $1
            RETURNING *;
        `
        try {
            const result = await db.query(query, [id]);
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


    async updateUser(id: number, data: TUpdateUser) {
        const { name, email, password, admin } = data;
        const updatedAt = new Date();

        const setClauses = [];
        const values = [];

        if (name !== undefined) {
            setClauses.push(`"name" = $${values.length + 1}`);
            values.push(name);
        }

        if (email !== undefined) {
            setClauses.push(`"email" = $${values.length + 1}`);
            values.push(email);
        }

        if (password !== undefined) {
            setClauses.push(`"password" = $${values.length + 1}`);
            values.push(password);
        }

        if (admin !== undefined) {
            setClauses.push(`"admin" = $${values.length + 1}`);
            values.push(admin);
        }

        setClauses.push(`"updatedAt" = $${values.length + 1}`);
        values.push(updatedAt);

        const setClause = setClauses.join(', ');

        const query = `
            UPDATE "usuarios"
            SET
            ${setClause}
            WHERE "id" = $${values.length + 1}
            RETURNING *;
        `;

        try {
            const result = await db.query(query, values.concat([id.toString()]));
            const updatedUser = result.rows[0];

            if (!updatedUser) {
                throw new Error(`User with ID ${id} not found`);
            }

            // Omit the password field using the utility function
            const userWithoutPassword = omitPasswordFromUser(updatedUser);

            return userWithoutPassword;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    async login(email: string, password: string): Promise<TUser> {
        const query = `
            SELECT *
            FROM "usuarios"
            WHERE "email" = $1 AND "password" = $2;`;

        try {
            const result = await db.query(query, [email, password]);
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