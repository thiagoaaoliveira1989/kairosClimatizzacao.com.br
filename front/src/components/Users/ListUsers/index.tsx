import { useContext, useState } from "react";
import { IUsers } from "../../../interfaces/user.interface";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { UserContext } from "../../../providers/UserContext";
import CreateUserModal from "../modal/createdUser";

export const ListUsers = () => {
  const { userList, userDelete, userUpdate, openModal, showModal } =
    useContext(UserContext);
  const [userEditId, setUserEditId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<IUsers>({
    id: 0,
    username: "",
    email: "",
    admin: false,
  });

  const isEditing = (id: number) => id === userEditId;

  const handleEditClick = (payload: IUsers) => {
    setUserEditId(payload.id);
    setEditedUser({
      id: payload.id || 0,
      username: payload.username || "", // Garante que 'username' é uma string
      email: payload.email || "", // Garante que 'email' é uma string
      admin: payload.admin || false, // Garante que 'admin' é um booleano
    });
  };

  const handleUpdateClick = () => {
    if (editedUser && userEditId !== null) {
      console.log(editedUser);
      userUpdate(editedUser, userEditId);
      setUserEditId(null);
    }
  };

  const handleCancelClick = () => {
    setUserEditId(null);
  };

  return (
    <>
      <div className="p-[2rem] flex flex-col gap-2 items-start">
        <div className="flex w-full justify-between">
          <h1 className="text-[2rem] text-primary font-bold">Usuários</h1>
          <button
            className="bg-secundary p-4 rounded-2xl text-[1.5rem] text-white hover:bg-blue-300 hover:text-primary font-bold"
            onClick={() => openModal()}
          >
            Criar Novo Usuário
          </button>
        </div>

        {userList?.length > 0 ? (
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr className="">
                <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">
                  ID
                </th>
                <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">
                  Nome
                </th>
                <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">
                  E-mail
                </th>
                <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">
                  Admin
                </th>
                <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((user: IUsers) => (
                <tr key={user?.id}>
                  <td className="px-4 py-2  text-start">{user?.id}</td>
                  <td className="px-4 py-2  text-start">
                    {isEditing(user.id) ? (
                      <input
                        type="text"
                        value={editedUser?.username}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser!,
                            username: e.target.value,
                          })
                        }
                      />
                    ) : (
                      user?.username
                    )}
                  </td>
                  <td className="px-4 py-2  text-start">
                    {isEditing(user.id) ? (
                      <input
                        type="text"
                        value={editedUser?.email}
                        onChange={(e) =>
                          setEditedUser(() => ({
                            ...editedUser!,
                            email: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      user?.email
                    )}
                  </td>
                  <td className="px-4 py-2  text-start">
                    {isEditing(user.id) ? (
                      <input
                        type="checkbox"
                        checked={editedUser?.admin || false}
                        onChange={(e) =>
                          setEditedUser(() => ({
                            ...editedUser!,
                            admin: e.target.checked,
                          }))
                        }
                      />
                    ) : user?.admin ? (
                      "Sim"
                    ) : (
                      "Não"
                    )}
                  </td>
                  <td className="px-4 py-2  text-start flex gap-5">
                    {isEditing(user.id) ? (
                      <>
                        <button onClick={handleUpdateClick}>Salvar</button>
                        <button onClick={handleCancelClick}>Cancelar</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEditClick(user)}>
                          <MdEdit size={25} color={"green"} />
                        </button>
                        <button onClick={() => userDelete(user.id)}>
                          <MdDeleteForever size={25} color={"red"} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Nenhum usuário encontrado.</div>
        )}
      </div>

      {showModal === true ? <div className='mt-[-300px] w-[100%]'> <CreateUserModal /> </div> : null}


    </>
  );
};
