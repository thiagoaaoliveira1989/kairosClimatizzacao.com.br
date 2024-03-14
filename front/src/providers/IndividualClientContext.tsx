import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { ICreateIndividualClient, IIndividualClient } from "../interfaces/individualClient.interface";

interface IndividualClientContextProps {
    individualClientList: IIndividualClient[];
    individualClientCreate: (FormData: ICreateIndividualClient) => void;
    individualClientDelete: (userId: number) => void;
    openModal: () => void;
    showModal: boolean;
}

export const IndividualClientContext = createContext<IndividualClientContextProps>({
    individualClientList: [],
    individualClientCreate: () => { },
    individualClientDelete: () => { },
    openModal: () => { },
    showModal: false,
});

interface IndividualClientProviderProps {
    children: ReactNode;
}

export const IndividualClientProvider: React.FC<IndividualClientProviderProps> = ({ children }) => {
    const [individualClientList, setIndividualClientList] = useState<IIndividualClient[]>([]);
    const [showModal, setShowModal] = useState(false);
    const token = JSON.parse(localStorage.getItem("@Token") as string);

    const openModal = () => {
        setShowModal(!showModal);
    };


    useEffect(() => {

        if (token) {

            const getAllIndivClient = async () => {
                try {
                    const { data } = await api.get("/indivclient", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(data);


                    setIndividualClientList(data);
                } catch (error) {

                    console.log(error);
                }

            }

            getAllIndivClient()
        }


    }, [token]);


    const individualClientCreate = async (formData: ICreateIndividualClient) => {

        try {

            const { data } = await api.post("/indivclient", formData);

            console.log(data);


            if (token) {

                // Recupere a lista atualizada de usuários após a criação bem-sucedida
                const updatedIndividualClient = await api.get("/indivclient", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Certifique-se de substituir 'token' pela sua lógica de obtenção do token
                    },
                });

                toast.success("Mensagem enviada com sucesso!", {
                    className: "toast-custom-background",
                });
                // Atualize o estado 'userList' com a nova lista
                setIndividualClientList(updatedIndividualClient.data);
            }
        } catch (error) {
            toast.error("Error ao enviar mensagem!", {
                className: "toast-custom-background",
            });

            console.log(error);
        }
    };




    const individualClientDelete = async (userId: number) => {

        const id = Number(userId);
        const decodedToken = jwtDecode(token);
        const tokenId = Number(decodedToken.sub);
        if (userId !== tokenId) {
            if (token) {
                try {
                    await api.delete(`/indivclient/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    toast.success("Usuario Deletado com sucesso!", {
                        className: "toast-custom-background",
                    });


                    // Update the userList by filtering out the deleted user
                    setIndividualClientList((prevUserList) =>
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
        <IndividualClientContext.Provider
            value={{
                individualClientCreate,
                individualClientDelete,
                individualClientList,
                showModal,
                openModal,

            }}
        >
            {children}
        </IndividualClientContext.Provider>
    );
};
