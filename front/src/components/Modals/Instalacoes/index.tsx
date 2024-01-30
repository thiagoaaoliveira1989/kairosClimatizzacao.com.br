import React from 'react';

interface IInstalacaoModalProps {
    handleOpenAndCloseModalInstalacao: () => void;
}

export const InstalacaoModal: React.FC<IInstalacaoModalProps> = ({ handleOpenAndCloseModalInstalacao }) => {

    return (
        <section className="bg-black bg-opacity-50 w-full h-full z-10 absolute">
            <div className="bg-gray-400 bg-opacity-95 mt-[150px] container flex m-auto h-auto gap-3 pb-5">
                <button onClick={handleOpenAndCloseModalInstalacao} className='btn absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4'>X</button>
                <div className=" flex flex-col gap-3 px-[2rem]">
                    <h1 className=' mt-[3rem] text-primary font-primary text-center text-[2rem] font-bold' > Profissionalismo e Eficiência na Instalação de Sistemas de Ar Condicionado para Residências e Apartamentos </h1>
                    < p className='text-white text-[1.3rem] mt-5 mb-5' > Seja em casas ou apartamentos, oferecemos serviços de instalação de sistemas de ar condicionado com comprometimento e excelência. Nossa equipe altamente qualificada garante uma instalação precisa, levando em consideração as características específicas de cada espaço. </p>

                    <h2 className='text-primary font-primary text-center text-[1.8rem] font-bold'>Instalação em Casas e Apartamentos:</h2>

                    < ul className='flex flex-col gap-5 text-white text-[1.2rem]' >

                        <li><span className='text-primary font-bold' > Avaliação Personalizada:</span> Antes de qualquer instalação, realizamos uma avaliação personalizada do local. Consideramos o tamanho do ambiente, a disposição dos cômodos e outras variáveis importantes para determinar o posicionamento ideal do sistema de ar condicionado.</li >

                        <li><span className='text-primary font-bold' > Escolha do Equipamento Adequado:  </span>  Orientamos nossos clientes na escolha do equipamento mais adequado para suas necessidades, levando em conta a eficiência energética e a capacidade de refrigeração necessária para o espaço.</li >

                        <li><span className='text-primary font-bold' >  Instalação Profissional: </span> Nossa equipe realiza a instalação de forma profissional e segura, seguindo todas as normas e padrões de segurança. Garantimos que o sistema esteja funcionando corretamente antes de concluir o serviço.</li >

                        <li><span className='text-primary font-bold' >  Infraestrutura com Caixas de Passagem: </span> Além da instalação convencional, oferecemos serviços de infraestrutura, incluindo a implementação de caixas de passagem. Essa solução é ideal para facilitar futuras instalações, mudanças de local ou adições ao sistema de ar condicionado.</li >


                    </ul>

                    <h2 className='text-primary font-primary text-center text-[1.8rem] font-bold'>Vantagens da Infraestrutura com Caixas de Passagem:</h2>

                    < ul className='flex flex-col gap-5 text-white text-[1.2rem]' >

                        <li><span className='text-primary font-bold' >Flexibilidade para Mudanças: </span>  As caixas de passagem proporcionam flexibilidade, permitindo alterações ou expansões no sistema sem a necessidade de grandes intervenções na estrutura existente.</li >

                        <li><span className='text-primary font-bold' > Facilidade de Manutenção:  </span> Com uma infraestrutura bem planejada, a manutenção do sistema torna-se mais fácil e eficiente. Acesso rápido às conexões simplifica os procedimentos de limpeza e reparo.</li >

                        <li><span className='text-primary font-bold' > Valorização do Imóvel:  </span>  A instalação de uma infraestrutura adequada é um investimento que valoriza o imóvel. Futuros compradores ou inquilinos apreciarão a praticidade e a modernidade desse planejamento.</li >

                    </ul>

                    <p className='mt-8 font-medium text-red-100 text-[1.5rem]'>Nosso compromisso vai além da instalação. Trabalhamos para proporcionar um ambiente confortável e eficiente, contribuindo para o bem-estar de nossos clientes. Conte conosco para serviços de instalação que atendam às suas necessidades específicas, garantindo qualidade, segurança e durabilidade. Agende sua instalação conosco e desfrute de um ambiente climatizado com praticidade e profissionalismo.</p>
                </div>
            </div>
        </section>
    )

}