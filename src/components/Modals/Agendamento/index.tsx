import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { agendamento } from '../../../services/agendamento';

interface IAgendamentoModalProps {
  openModal: () => void;
}

export const AgendamentoModal: React.FC<IAgendamentoModalProps> = ({ openModal }) => {
  const [agendamentoData, setAgendamentoData] = useState({
    name: '',
    telefone: '',
    date: null as string | null,
    time: null as string | null,
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    referencia: '',
  });

  const formatarData = (data: Date) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}-${mes}-${ano}`;
  };

  const formatarHoraMinuto = (hora: Date) => {
    const hh = String(hora.getHours()).padStart(2, '0');
    const mm = String(hora.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAgendamentoData((prevData) => ({
      ...prevData,
      [name]: name === 'date' ? new Date(value) : value,
    }));
  };


  const handleDateChange = (date: Date | null) => {
    setAgendamentoData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleTimeChange = (time: Date | null) => {
    setAgendamentoData((prevData) => ({
      ...prevData,
      time,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (agendamentoData.date && agendamentoData.time) {
      // Lógica para enviar dados ao backend, incluindo os novos campos
      /*    agendamento(agendamentoData); */
      console.log('Dados do agendamento:', agendamentoData);
    } else {
      console.error('Data e hora são obrigatórias.');
    }
  };

  return (
    <section className="bg-black bg-opacity-50 w-full h-full z-10 absolute">
      <div className="bg-gray-400 bg-opacity-95 mt-[100px] p-[1rem] container flex m-auto h-auto gap-3 pb-5">
        <button onClick={openModal} className="btn absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4">
          {' '}
          X{' '}
        </button>
        <form onSubmit={handleSubmit} className="mt-8 lg:w-[50%] mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col">
          <h2 className='mt-[10px] mb-[30px] font-primary text-primary font-bold text-[2rem] text-center'>Agende uma visíta</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={agendamentoData.name}
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
              value={agendamentoData.telefone}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4 flex gap-2 justify-between">

            <div className="mb-4 flex flex-col gap-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                Data:
              </label>
              <DatePicker
                selected={agendamentoData.date}
                onChange={handleDateChange}
                filterDate={(date: Date) => date.getDay() !== 0 && date.getDay() !== 6}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
              <span className="text-gray-500">{agendamentoData.date ? formatarData(agendamentoData.date) : ''}</span>
            </div>

            <div className="mb-4 flex flex-col gap-1">
              <label htmlFor="time" className="block text-sm font-medium text-gray-600">
                Horário:
              </label>
              <DatePicker
                selected={agendamentoData.time}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="HH:mm"
                minTime={new Date(new Date().setHours(8, 0))}
                maxTime={new Date(new Date().setHours(18, 0))}
                timeIntervals={120}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
              <span className="text-gray-500">{agendamentoData.time ? formatarHoraMinuto(agendamentoData.time) : ''}</span>
            </div>

          </div>


          <div className='flex gap-2'>

            <div className="mb-4 w-[80%]">
              <label htmlFor="logradouro" className="block text-sm font-medium text-gray-600">
                Logradouro:
              </label>
              <input
                type="text"
                id="logradouro"
                name="logradouro"
                value={agendamentoData.logradouro}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="numero" className="block text-sm font-medium text-gray-600">
                Número:
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={agendamentoData.numero}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
            </div>
          </div>

          <div className='flex gap-2'>

            <div className="mb-4 w-[50%]" >
              <label htmlFor="bairro" className="block text-sm font-medium text-gray-600">
                Bairro:
              </label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={agendamentoData.bairro}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
            </div>

            <div className="mb-4 w-[50%]">
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-600">
                Cidade:
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={agendamentoData.cidade}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="pontoReferencia" className="block text-sm font-medium text-gray-600">
              Ponto de Referência:
            </label>
            <input
              type="text"
              id="referencia"
              name="referencia"
              value={agendamentoData.referencia}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <button type="submit" className="btn bg-primary text-white p-2 rounded-full">
            Agendar
          </button>

        </form>

      </div>
    </section>
  );
};

export default AgendamentoModal;
