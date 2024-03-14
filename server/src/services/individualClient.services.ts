import { IndividualClient } from "@prisma/client"
import { prisma } from "../database"
import { ICreateIndividualClient, IReturnIndividualClient, IUpdateIndividualClient } from "../interfaces/individualClient.interface"
import { returnIndividualClientSchema } from "../schemas/individualClient.schema"

export class IndividualClientService {
    
    public create = async (payload: ICreateIndividualClient): Promise<IReturnIndividualClient> => {
        const newIndivClient = await prisma.individualClient.create({ data: payload })
        return returnIndividualClientSchema.parse(newIndivClient)
    }

    public findMany = async (): Promise<IReturnIndividualClient[]> => {
        const allIndivClient = await prisma.individualClient.findMany();
        return returnIndividualClientSchema.array().parse(allIndivClient);
    }

    public FindId = async ({ id }: IndividualClient): Promise<IReturnIndividualClient> => {
        const indivClient = await prisma.individualClient.findFirst({ where: { id } })
        return returnIndividualClientSchema.parse(indivClient)
    }

    public update = async ({ id }: IndividualClient, payload: IUpdateIndividualClient): Promise<IReturnIndividualClient> => {
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
        return returnIndividualClientSchema.parse(updateIndivClient);
    }

    public delete = async ({ id }: IndividualClient): Promise<void> => {
        await prisma.individualClient.delete({ where: { id } });
    }
}