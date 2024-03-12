import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { ICreatedUsers, ILogin, IUsers } from "../interfaces/user.interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserContextProps {
  user: IUsers | null;
  userList: IUsers[];
  loading: boolean;
  userLogin: (formData: ILogin) => void;
  userCreate: (FormData: ICreatedUsers) => void;
  userUpdate: (formData: IUsers, userId: number) => void;
  userDelete: (userId: number) => void;
  userLogout: () => void;
  openModal: () => void;
  showModal: boolean;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  userList: [],
  loading: false,
  showModal: false,
  openModal: () => {},
  userLogin: () => {},
  userCreate: () => {},
  userLogout: () => {},
  userUpdate: () => {},
  userDelete: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userList, setUserList] = useState<IUsers[]>([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldFetchUsers, setShouldFetchUsers] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const token = JSON.parse(localStorage.getItem("@Token") as string);

      setLoading(true);
      if (token) {
        try {
          const { data } = await api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(data);
          setShouldFetchUsers(true); // Force fetching users after auto-login
        } catch (error) {
          console.error("Error ao realizar auto-login", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    autoLogin();
  }, []);

  useEffect(() => {
    if (shouldFetchUsers) {
      const getUsers = async () => {
        const token = JSON.parse(localStorage.getItem("@Token") as string);
        if (token) {
          try {
            const { data } = await api.get("/users", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUserList(data);
          } catch (error) {
            console.log(error);
          } finally {
            setShouldFetchUsers(false);
          }
        }
      };
      getUsers();
    }
  }, [shouldFetchUsers]);

  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users/login", formData);

      localStorage.setItem("@Token", JSON.stringify(data.accessToken));

      setUser(data.user);
      toast.success("Login realizado com sucesso!", {
        className: "toast-custom-background",
      });

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Email ou senha incorretos!", {
        className: "toast-custom-background",
      });
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    navigate("/");
  };

  const userUpdate = async (formData: IUsers, userId: number) => {
    const token = JSON.parse(localStorage.getItem("@Token") as string);

    if (token) {
      try {
        const user = {
          username: formData.username,
          email: formData.email,
          admin: formData.admin,
        };

        const { data } = await api.put(`/users/${formData.id}`, user, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update the userList by mapping through it and replacing the updated user
        setUserList((prevUserList) =>
          prevUserList.map((userItem) =>
            userItem.id === userId ? { ...userItem, ...data } : userItem
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userDelete = async (userId: number) => {
    const token = JSON.parse(localStorage.getItem("@Token") as string);
    const id = Number(userId);
    if (token && user) {
      try {
        await api.delete(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update the userList by filtering out the deleted user
        setUserList((prevUserList) =>
          prevUserList.filter((userItem) => userItem.id !== userId)
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userCreate = async (formData: ICreatedUsers) => {
    const token = JSON.parse(localStorage.getItem("@Token") as string);

    try {
      const { data } = await api.post("/users", formData);

      console.log(data);

      // Recupere a lista atualizada de usuários após a criação bem-sucedida
      const updatedUserList = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Certifique-se de substituir 'token' pela sua lógica de obtenção do token
        },
      });

      // Atualize o estado 'userList' com a nova lista
      setUserList(updatedUserList.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userList,
        loading,
        userLogin,
        userLogout,
        userUpdate,
        userDelete,
        userCreate,
        openModal,
        showModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
