import { useContext } from "react";
import { ContactFormContext } from "../../../../providers/ContactFormContext";
import { IContactForm } from "../../../../interfaces/contactForm.interface";

export const ListContactForms = () => {
  const { contactFormList, contactFormDelete } = useContext(ContactFormContext);

  const sortedContactFormList = [...contactFormList].sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="p-8 flex flex-col gap-4 items-start w-full">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl text-primary font-bold">Formulários de Contato</h1>
        </div>

        {sortedContactFormList.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Nome</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">E-mail</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Telefone</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Assunto</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Mensagem</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedContactFormList.map((contactForm: IContactForm) => (
                  <tr key={contactForm.id}>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.id}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.name}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.email}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.phoneNumber}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.subject}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">{contactForm.message}</td>
                    <td className="px-4 py-2 text-left text-sm text-gray-900">
                      <button
                        onClick={() => contactFormDelete(contactForm.id)}
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
          <div>Nenhum formulário de contato encontrado.</div>
        )}
      </div>
    </>
  );
};
