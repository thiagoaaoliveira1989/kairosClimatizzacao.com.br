import { prisma } from "../database"
import { ICreateContactForm, IReturnContactForm } from "../interfaces/contactForm.interface"
import { returnContatFormSchema } from "../schemas/contactFormSchema"

export class ContactFormService {
    public create = async (payload: ICreateContactForm): Promise<IReturnContactForm> => {
        const newContactForm = await prisma.contactForm.create({ data: payload })
        return returnContatFormSchema.parse(newContactForm);
    }

    public findMany = async (): Promise<IReturnContactForm[]> => {
        const allContactForm = await prisma.contactForm.findMany()
        console.log(allContactForm);
        return returnContatFormSchema.array().parse(allContactForm);
    }

    public delete = async (contactId: number): Promise<void> => {
        await prisma.contactForm.delete({ where: { id: contactId } })
    }
}