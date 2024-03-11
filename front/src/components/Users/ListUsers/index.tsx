import { useContext } from "react";
import { IUsers } from "../../../interfaces/user.interface";
import { UserContext } from "../../../providers/UserContext";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export const ListUsers = () => {

    const context = useContext(UserContext);

    const { listUsers } = context as {
        listUsers: { users: IUsers[] } | undefined
    };

    const users = listUsers?.users || [];

    return (
        <div className="p-[2rem] flex flex-col gap-2 items-start">
            <div className="flex w-full justify-between">
                <h1 className="text-[2rem] text-primary font-bold">Usuários</h1>
                <button className="bg-secundary p-4 rounded-2xl text-[1.5rem] text-white  hover:bg-blue-300 hover:text-primary font-bold">Criar Novo Usuário</button>
            </div>

            {users?.length > 0 ? (
                <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr className="">
                            <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">ID</th>
                            <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">Nome</th>
                            <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">E-mail</th>
                            <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">Admin</th>
                            <th className="px-4 py-2  text-start text-[1.2rem] font-semibold">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: IUsers) => (
                            <tr key={user?.id}>
                                <td className="px-4 py-2  text-start">{user?.id}</td>
                                <td className="px-4 py-2  text-start">{user?.name}</td>
                                <td className="px-4 py-2  text-start">{user?.email}</td>
                                <td className="px-4 py-2  text-start">{user?.admin ? 'Sim' : 'Não'}</td>
                                <td className="px-4 py-2  text-start flex gap-5">
                                    <button> <MdEdit size={25} color={"green"} /> </button>
                                    <button> <MdDeleteForever size={25} color={"red"} /> </button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>Nenhum usuário encontrado.</div>
            )}
        </div>
    )
}