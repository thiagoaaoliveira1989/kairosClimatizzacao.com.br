import { ReactNode } from "react";

export interface IUsers {
    id: number;
    name: ReactNode;
    email: string;
    password: string;
    admin: boolean;
}