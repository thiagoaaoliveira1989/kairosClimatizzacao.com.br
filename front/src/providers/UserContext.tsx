// UserContext.tsx

import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { IUsers } from "../interfaces/user.interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextProps {
    userLogin: (formData: IUsers) => void;
    loading: boolean;
    user: IUsers | null;
    listUsers: {
        length: number;
        users: IUsers[];
    } | undefined;
    userLogout: () => void;
}

export const UserContext = createContext<UserContextProps>({
    userLogin: () => { },
    loading: false,
    user: null,
    listUsers: undefined,
    userLogout: () => { },
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);
    const [listUsers, setListUsers] = useState<{ length: number; users: IUsers[] } | undefined>(undefined);
    const [user, setUser] = useState<IUsers | null>(() => {
        const storedUser = localStorage.getItem('@Token');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('@Token');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser).user;
            setUser(parsedUser);
        }
        setLoadingUser(false);
    }, []);

    const navigate = useNavigate();

    const userLogin = async (formData: IUsers) => {
        try {
            setLoading(true);
            const { data } = await api.post('/users/login', formData);

            localStorage.setItem('@Token', JSON.stringify(data));

            toast.success("Login realizado com sucesso!", {
                className: "toast-custom-background",
            });

            navigate("/admin/dashboard");
        } catch (error) {
            console.error("Email ou Senha incorretos");
        } finally {
            setLoading(false);
        }
    }

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem('@Token');
        navigate("/");
    }


    useEffect(() => {

      
        const findListUsers = async () => {
            try {
                setLoading(true);
                const { data } = await api.get('/users');
                setListUsers(data);
            } catch (error) {
                console.error("Erro interno do servidor", error);
            } finally {
                setLoading(false);
            }
        }

        if (!listUsers?.length) {
            findListUsers();
        }
    }, [listUsers]);

    return (
        <UserContext.Provider value={{ userLogin, loading, user, listUsers, userLogout }}>
            {!loadingUser && children}
        </UserContext.Provider>
    );
};
