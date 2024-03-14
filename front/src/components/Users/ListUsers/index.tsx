import { useContext, useState } from "react";
import { IUsers } from "../../../interfaces/user.interface";
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
      userUpdate(editedUser, userEditId);
      setUserEditId(null);
    }
  };

  const handleCancelClick = () => {
    setUserEditId(null);
  };

  const sortedUserList = [...userList].sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="p-8 flex flex-col gap-4 items-start w-full">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl text-primary font-bold">Usuários</h1>
          <button
            className="bg-secondary py-2 px-4 rounded-lg text-lg text-white hover:bg-blue-300 hover:text-primary bg-primary font-bold"
            onClick={() => openModal()}>
            Criar Novo Usuário
          </button>
        </div>

        {sortedUserList?.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr className="">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    E-mail
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Admin
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedUserList?.map((user: IUsers) => (
                  <tr key={user?.id}>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
                      {user?.id}
                    </td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
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
                          className="border border-gray-300 rounded-lg p-1"
                        />
                      ) : (
                        user?.username
                      )}
                    </td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
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
                          className="border border-gray-300 rounded-lg p-1"
                        />
                      ) : (
                        user?.email
                      )}
                    </td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
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
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
                      {isEditing(user.id) ? (
                        <>
                          <button
                            onClick={handleUpdateClick}
                            className="bg-blue-500 text-white px-4 py-1 rounded-lg mr-2 hover:bg-blue-600"
                          >
                            Salvar
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(user)}
                            className="bg-green-500 text-white font-bold px-4 py-1 rounded-lg mr-2 hover:bg-green-600">
                            Editar
                          </button>
                          <button
                            onClick={() => userDelete(user.id)}
                            className="bg-red-500 text-white font-bold px-4 py-1 rounded-lg mr-2 hover:bg-red-600">
                            Deletar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Nenhum usuário encontrado.</div>
        )}
      </div>

      {showModal === true ? (
        <div className="mt-[-300px] w-[100%]">
          <CreateUserModal />
        </div>
      ) : null}
    </>
  );
};
