import { useContext } from "react";
import { IndividualClientContext } from "../../../providers/IndividualClientContext";
import { IIndividualClient } from "../../../interfaces/individualClient.interface";

export const ListIndividualClients = () => {
    const { individualClientList, individualClientDelete } = useContext(IndividualClientContext);

    const sortedIndividualClientList = [...individualClientList].sort((a, b) => a.id - b.id);

    function formatarData(dataString: string | number | Date) {
        const data = new Date(dataString);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <>
            <div className="p-8 flex flex-col gap-4 items-start w-full">
                <div className="flex w-full justify-between">
                    <h1 className="text-2xl text-primary font-bold">Clientes Individuais</h1>
                </div>

                {sortedIndividualClientList.length > 0 ? (
                    <div className="overflow-x-auto w-full">
                        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Nome</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">CPF</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Data de Nascimento</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Endereço</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Telefone</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Número de Contrato</th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {sortedIndividualClientList.map((client: IIndividualClient) => (
                                    <tr key={client.id}>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.id}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.user.username}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.user.email}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.cpf}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{formatarData(client.dateOfBirth)}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.address}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.phoneNumber}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">{client.contractNumber}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-900">
                                            <button
                                                onClick={() => individualClientDelete(client.id)}
                                                className="bg-red-500 text-white font-bold px-4 py-1 rounded-lg mr-2 hover:bg-red-600"
                                            >
                                                Deletar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>Nenhum cliente pessoa física encontrado.</div>
                )}
            </div>
        </>
    );
};
