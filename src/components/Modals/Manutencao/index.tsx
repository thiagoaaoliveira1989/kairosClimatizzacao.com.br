import React from 'react';

interface IManutencaoModalProps {
    handleOpenAndCloseModalManutencao: () => void;
}

export const ManutencaoModal: React.FC<IManutencaoModalProps> = ({ handleOpenAndCloseModalManutencao }) => {

    return (
        <section className="bg-black bg-opacity-50 w-full h-full z-1 absolute ">
            <div className="bg-gray-400 bg-opacity-95 mt-[150px] container flex m-auto h-auto gap-3 pb-5" >
                <button onClick={handleOpenAndCloseModalManutencao} className='btn absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4' >X</button>
                <div className="mt-[3rem] flex flex-col gap-3 p-6 ">
                    <h1 className='text-primary font-primary text-center text-[2rem] font-bold'>Manutenção Preventiva: Preservando o Bem-Estar</h1>
                    <p className='text-white text-[1.3rem] mt-5 mb-5'>A manutenção preventiva é a chave para evitar problemas futuros e garantir o funcionamento eficiente do seu sistema de ar condicionado. Recomendamos agendar inspeções regulares, que incluem:</p>
                    <ul className='flex flex-col gap-5 text-white text-[1.2rem]'>
                        <li><span className='text-primary font-bold'>Limpeza de Filtros:</span> Filtros sujos reduzem a eficiência do sistema e comprometem a qualidade do ar. A limpeza regular dos filtros evita a acumulação de poeira e impurezas.</li>
                        <li><span className='text-primary font-bold'>Verificação de Vazamentos: </span> Inspeções visuais e testes de pressão ajudam a identificar e corrigir vazamentos de refrigerante, evitando danos ao equipamento e prejuízos financeiros.</li>
                        <li><span className='text-primary font-bold'>Calibração de Termostatos:</span> Garanta que seu sistema mantenha a temperatura desejada com a calibração periódica dos termostatos.</li>
                        <li><span className='text-primary font-bold'>Inspeção de Componentes Elétricos:</span> Verificar e apertar conexões elétricas previne falhas no sistema, minimizando riscos de incêndio e garantindo o funcionamento seguro.</li>
                    </ul>
                </div>
                <div className="mt-[3rem] flex flex-col gap-3 p-6">
                    <h1 className='text-primary font-primary text-center text-[2rem] font-bold'>Manutenção Corretiva: Solucionando Problemas Rapidamente</h1>
                    <p className='text-white text-[1.3rem] mt-5 mb-5'>Mesmo com a manutenção preventiva, imprevistos podem ocorrer. Para lidar com problemas emergentes, oferecemos serviços de manutenção corretiva, incluindo:</p>
                    <ul className='flex flex-col gap-5 text-white text-[1.2rem]'>
                        <li><span className='text-primary font-bold'>Reparo de Vazamentos:</span> Nossos técnicos altamente qualificados estão prontos para identificar e corrigir vazamentos de refrigerante de forma eficiente, garantindo a integridade do sistema.</li>
                        <li><span className='text-primary font-bold'>Substituição de Peças Danificadas:</span> Componentes desgastados podem comprometer o desempenho do ar condicionado. Realizamos a substituição rápida e eficaz de peças danificadas.</li>
                        <li><span className='text-primary font-bold'>Diagnóstico de Falhas:</span> Utilizamos tecnologia avançada para diagnosticar rapidamente problemas elétricos, mecânicos ou de software, proporcionando soluções precisas.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}