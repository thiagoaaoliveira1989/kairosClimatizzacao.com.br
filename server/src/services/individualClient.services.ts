import { prisma } from "../database"
import { ICreateIndividualClient, IReturnIndividualClient, IUpdateIndividualClient } from "../interfaces/individualClient.interface"

export class IndividualClientService {

    public create = async (payload: ICreateIndividualClient): Promise<IReturnIndividualClient> => {
        const data: any = {
            dateOfBirth: new Date(payload.dateOfBirth),
            cpf: payload.cpf,
            address: payload.address,
            phoneNumber: payload.phoneNumber,
            contractNumber: payload.contractNumber,
        };

        // Adiciona userId ao objeto data apenas se estiver presente em payload
        if (payload.userId !== undefined) {
            data.userId = payload.userId;
        }

        const newIndivClient = await prisma.individualClient.create({
            data: data,
            include: { user: true }
        });
        return this.mapToReturnSchema(newIndivClient);
    }


    public findMany = async (): Promise<IReturnIndividualClient[]> => {
        const allIndivClients = await prisma.individualClient.findMany({
            include: {
                user: true
            }
        });
        return allIndivClients.map(client => this.mapToReturnSchema(client));
    }

    public FindId = async (id: number): Promise<IReturnIndividualClient> => {
        const indivClient = await prisma.individualClient.findFirst({
            where: { id },
            include: { user: true }
        });
        return this.mapToReturnSchema(indivClient);
    }

    public update = async (id: number, payload: IUpdateIndividualClient): Promise<IReturnIndividualClient> => {
        const updateIndivClient = await prisma.individualClient.update({
            where: { id },
            data: {
                cpf: payload?.cpf as string,
                dateOfBirth: payload?.dateOfBirth as Date,
                address: payload?.address as string,
                phoneNumber: payload?.phoneNumber as string,
                contractNumber: payload?.contractNumber as string,
                userId: payload?.userId as number
            }
        });
        return this.mapToReturnSchema(updateIndivClient);
    }

    public delete = async (id: number): Promise<void> => {
        await prisma.individualClient.delete({ where: { id } });
    }

    private mapToReturnSchema(client: any): IReturnIndividualClient {
        return {
            id: client.id,
            cpf: client.cpf,
            dateOfBirth: client.dateOfBirth,
            address: client.address,
            phoneNumber: client.phoneNumber,
            contractNumber: client.contractNumber,
            user: client.user ? {
                id: client.user.id,
                username: client.user.username,
                email: client.user.email,
                admin: client.user.admin
            } : null,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt
        };
    }

}
