import { IUsers } from "./user.interface";

export interface IIndividualClient {
    id: number;
    cpf: string;
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
    contractNumber: string;
    user: IUsers; // Adicionando a propriedade user à interface
}

export interface ICreateIndividualClient {
    cpf: string;
    dateOfBirth: Date;
    address: string;
    phoneNumber: string;
    contractNumber: string;
    userId: number; // Adicionando a propriedade userId à interface
}
