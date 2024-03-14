import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { ICreateContactForm, IReturnContactForm } from '../../../server/src/interfaces/contactForm.interface';
import { jwtDecode } from "jwt-decode";

interface ContactFormContextProps {
    contactFormList: IReturnContactForm[];
    contactFormCreate: (FormData: ICreateContactForm) => void;
    contactFormDelete: (userId: number) => void;
    openModal: () => void;
    showModal: boolean;
}

export const ContactFormContext = createContext<ContactFormContextProps>({
    contactFormList: [],
    contactFormCreate: () => { },
    contactFormDelete: () => { },
    openModal: () => { },
    showModal: false,
});

interface ContactFormProviderProps {
    children: ReactNode;
}

export const ContactFormProvider: React.FC<ContactFormProviderProps> = ({ children }) => {
    const [contactFormList, setContactFormList] = useState<IReturnContactForm[]>([]);
    const [showModal, setShowModal] = useState(false);
    const token = JSON.parse(localStorage.getItem("@Token") as string);

    const openModal = () => {
        setShowModal(!showModal);
    };


    useEffect(() => {

        if (token) {

            const getAllMensage = async () => {
                try {
                    const { data } = await api.get("/contact", {
                        headers: {
                            Authorization: `Bearer ${token}`, // Certifique-se de substituir 'token' pela sua lógica de obtenção do token
                        },
                    });

                    // Atualize o estado 'userList' com a nova lista
                    setContactFormList(data);
                } catch (error) {

                    console.log(error);
                }



            }

            getAllMensage()
        }


    }, [token]);


    const contactFormCreate = async (formData: ICreateContactForm) => {

        try {

            const { data } = await api.post("/contact", formData);

            console.log(data);


            if (token) {

                // Recupere a lista atualizada de usuários após a criação bem-sucedida
                const updatedContactForm = await api.get("/contact", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Certifique-se de substituir 'token' pela sua lógica de obtenção do token
                    },
                });

                toast.success("Mensagem enviada com sucesso!", {
                    className: "toast-custom-background",
                });
                // Atualize o estado 'userList' com a nova lista
                setContactFormList(updatedContactForm.data);
            }
        } catch (error) {
            toast.error("Error ao enviar mensagem!", {
                className: "toast-custom-background",
            });

            console.log(error);
        }
    };




    const contactFormDelete = async (userId: number) => {

        const id = Number(userId);
        const decodedToken = jwtDecode(token);
        const tokenId = Number(decodedToken.sub);
        if (userId !== tokenId) {
            if (token) {
                try {
                    await api.delete(`/contact/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    toast.success("Usuario Deletado com sucesso!", {
                        className: "toast-custom-background",
                    });


                    // Update the userList by filtering out the deleted user
                    setContactFormList((prevUserList) =>
                        prevUserList.filter((userItem) => userItem.id !== userId)
                    );
                } catch (error) {
                    toast.error("Error ao excluir usuário!", {
                        className: "toast-custom-background",
                    });

                }
            }
        } else {
            toast.error("Não é possivel excluir seu proprio usuario nessa página!", {
                className: "toast-custom-background",
            });

        }
    };



    return (
        <ContactFormContext.Provider
            value={{
                contactFormCreate,
                contactFormDelete,
                contactFormList,
                showModal,
                openModal,

            }}
        >
            {children}
        </ContactFormContext.Provider>
    );
};
