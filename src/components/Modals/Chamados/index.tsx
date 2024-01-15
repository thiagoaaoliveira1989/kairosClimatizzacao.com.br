import React, { useState } from 'react';

interface IChamadosModalProps {
  openModalChamados: () => void;
}

export const ChamadosModal: React.FC<IChamadosModalProps> = ({ openModalChamados }) => {
  const [chamadoData, setChamadoData] = useState({
    contractNumber: '',
    name: '',
    telefone: '',
    motivoChamado: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    pontoReferencia: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChamadoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., sending data to the server)
    console.log('Chamado data submitted:', chamadoData);
  };

  return (
    <section className="bg-black bg-opacity-50 w-full h-full z-1 absolute ">
      <div className="bg-gray-400 bg-opacity-95 mt-[210px] container flex m-auto h-auto gap-3 pb-5">
        <button
          onClick={openModalChamados}
          className="btn absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4"
        >
          {' '}
          X{' '}
        </button>
        <form
          onSubmit={handleSubmit}
          className="my-[5rem] w-[50%] mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col"
        >
          <h2 className="mt-[10px] mb-[30px] font-primary text-primary font-bold text-[2rem] text-center">
            Registrar Chamado
          </h2>
          <div className="mb-4">
            <label htmlFor="contractNumber" className="block text-sm font-medium text-gray-600">
              Número do Contrato:
            </label>
            <input
              type="text"
              id="contractNumber"
              name="contractNumber"
              value={chamadoData.contractNumber}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={chamadoData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-600">
              Telefone:
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={chamadoData.telefone}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="motivoChamado" className="block text-sm font-medium text-gray-600">
              Motivo do Chamado:
            </label>
            <input
              type="text"
              id="motivoChamado"
              name="motivoChamado"
              value={chamadoData.motivoChamado}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <button type="submit" className="btn bg-primary text-white p-2 rounded-full">
            Registrar Chamado
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChamadosModal;
