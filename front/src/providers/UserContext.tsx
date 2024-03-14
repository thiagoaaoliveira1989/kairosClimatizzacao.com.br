import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { ICreatedUsers, ILogin, IUsers } from "../interfaces/user.interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

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
  openModal: () => { },
  userLogin: () => { },
  userCreate: () => { },
  userLogout: () => { },
  userUpdate: () => { },
  userDelete: () => { },
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userList, setUserList] = useState<IUsers[]>([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const token = JSON.parse(localStorage.getItem("@Token") as string);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const navigate = useNavigate();

  useEffect(() => {

    if (token) {
      const autoLogin = async () => {
        setLoading(true);

        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }

        try {
          const { data } = await api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          console.error("Error ao realizar auto-login", error);
        } finally {
          setLoading(false);
        }
      };

      autoLogin();

    }



    if (token) {
      const getUsers = async () => {
        setLoading(true);
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
            setLoading(false);
          }
        }
      };
      getUsers();
    }

    return () => {
      setUser(null)
    }
  }, [token]);



  const userLogin = async (formData: ILogin) => {
    try {
      setLoading(true);

      const { data } = await api.post("/users/login", formData);

      if (data.user.admin === true) {
        localStorage.setItem("@Token", JSON.stringify(data.accessToken));

        setUser(data.user);
        toast.success("Login realizado com sucesso!", {
          className: "toast-custom-background",
        });

        navigate("/admin/dashboard");
      } else {
        toast.error("Permissão insuficiente para fazer Login!", {
          className: "toast-custom-background",
        });

        navigate("/admin/login");

      }
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



    if (token) {
      const decodedToken = jwtDecode(token);
      const tokenId = Number(decodedToken.sub);

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

        toast.success("Usuario Atualizado com sucesso!", {
          className: "toast-custom-background",
        });

        // Atualize o estado 'user' se o usuário que está sendo atualizado for o usuário atualmente logado

        if (data.id === tokenId) {
          setUser(data);

        }

        // Update the userList by mapping through it and replacing the updated user
        setUserList((prevUserList) =>
          prevUserList.map((userItem) =>
            userItem.id === userId ? { ...userItem, ...data } : userItem
          )
        );


      } catch (error) {
        toast.error("Error ao atualizar usuário!", {
          className: "toast-custom-background",
        });
      }
    }
  };

  const userDelete = async (userId: number) => {

    const id = Number(userId);
    const decodedToken = jwtDecode(token);
    const tokenId = Number(decodedToken.sub);
    if (userId !== tokenId) {
      if (token && user) {
        try {
          await api.delete(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Usuario Deletado com sucesso!", {
            className: "toast-custom-background",
          });


          // Update the userList by filtering out the deleted user
          setUserList((prevUserList) =>
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

      toast.success("Usuário criado com sucesso!", {
        className: "toast-custom-background",
      });
      // Atualize o estado 'userList' com a nova lista
      setUserList(updatedUserList.data);
    } catch (error) {
      toast.error("Error ao criar usuário!", {
        className: "toast-custom-background",
      });

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
