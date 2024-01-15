import React from 'react';

interface ILimpezaModalProps {
    handleOpenAndCloseModalLimpeza: () => void;
}

export const LimpezaModal: React.FC<ILimpezaModalProps> = ({ handleOpenAndCloseModalLimpeza }) => {

    return (
        <section className="bg-black bg-opacity-50 w-full h-full z-1 absolute " >
            <div className="bg-gray-400 bg-opacity-95 mt-[150px] container flex m-auto h-auto gap-3 pb-5" >
                <button onClick={handleOpenAndCloseModalLimpeza} className='btn absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4' > X </button>
                < div className="mt-[3rem] flex flex-col gap-3 p-6 " >
                    <h1 className='text-primary font-primary text-center text-[2rem] font-bold' > Garanta o Desempenho e a Qualidade do Ar com a Limpeza Profissional de Ar Condicionado </h1>
                    < p className='text-white text-[1.3rem] mt-5 mb-5' > Seu sistema de ar condicionado é essencial para manter um ambiente fresco e confortável. No entanto, para garantir seu funcionamento eficiente e a qualidade do ar que você respira, a limpeza regular é fundamental. Nossa equipe especializada em serviços de limpeza de ar condicionado está pronta para proporcionar a você um ambiente mais saudável e uma climatização eficaz. </p>

                    <h2 className='text-primary font-primary text-center text-[1.8rem] font-bold'>Por que a Limpeza de Ar Condicionado é Importante:</h2>

                    < ul className='flex flex-col gap-5 text-white text-[1.2rem]' >
                        <li><span className='text-primary font-bold' > Remoção de Partículas e Impurezas:</span>  Ao longo do tempo, poeira, ácaros e outras partículas podem se acumular nos filtros e nas bobinas do seu sistema de ar condicionado. Uma limpeza adequada elimina essas impurezas, contribuindo para um ar mais limpo e saudável.</li >
                        <li><span className='text-primary font-bold' > Prevenção de Mofo e Bactérias: </span>  Ambientes úmidos podem criar condições favoráveis para o crescimento de mofo e bactérias no interior do sistema de ar condicionado. Nossa limpeza abrange todas as áreas propensas a esses problemas, promovendo um ambiente mais seguro.</li >
                        <li><span className='text-primary font-bold' > Eficiência Energética: </span>  Sistemas de ar condicionado sujos e obstruídos têm que trabalhar mais para manter a temperatura desejada, resultando em maior consumo de energia. A limpeza regular melhora a eficiência energética, ajudando a reduzir os custos de operação.</li >

                    </ul>

                    <h2 className='text-primary font-primary text-center text-[1.8rem] font-bold'>Benefícios da Limpeza Profissional:</h2>

                    < ul className='flex flex-col gap-5 text-white text-[1.2rem]' >
                        <li><span className='text-primary font-bold' > Ambiente Mais Saudável: </span>  Reduzimos a presença de alérgenos e melhoramos a qualidade do ar, promovendo um ambiente mais saudável para você, sua família ou seus colaboradores.</li >
                        <li><span className='text-primary font-bold' > Eficiência e Durabilidade: </span> A limpeza regular prolonga a vida útil do seu sistema, mantendo-o funcionando de maneira eficiente ao longo do tempo.</li >
                        <li><span className='text-primary font-bold' > Economia de Energia:  </span>  Com um sistema limpo e bem mantido, você experimentará uma redução nos custos de energia, resultando em economia a longo prazo.</li >

                    </ul>

                    <p className='mt-8 font-medium text-red-100 text-[1.5rem]'>Não deixe a limpeza do seu ar condicionado para depois. Agende nossos serviços profissionais de limpeza agora e respire um ar mais puro e saudável. Estamos comprometidos em proporcionar a você um ambiente confortável e seguro.</p>
                </div>
            </div>
        </section>
    )

}