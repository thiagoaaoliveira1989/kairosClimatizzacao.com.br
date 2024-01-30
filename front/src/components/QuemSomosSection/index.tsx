import Banner from '../../assets/banner2.jpg';

export const QuemSomosSection = () => {
    return (
        <section id="quemsomos" className="w-[100%] h-[100%] mb-[30px]" >
            <div className='container m-auto'>

                <div className="flex flex-col items-center">
                    <h1 className="mt-[80px] lg:mt-[130px] text-[2.5rem] lg:text-[3.5rem] font-bold">Quem Somos</h1>
                </div>

                <div className='flex flex-col  lg:flex-row mt-[50px] lg:px-[2rem]'>
                    <img src={Banner} alt="" className=' w-full lg:w-[40%]' />
                    <div className='flex flex-col mt-5 gap-[30px] px-[2rem] lg:p-[20px]'>
                        <h2 className='font-bold text-[35px] text-primary text-center'>KAIRÓS CLIMATIZAÇÃO</h2>
                        <p className='font-medium text-[28px]'>
                            A <span className='font-bold text-secundary text-justify'>Kairós refrigeração</span> e climatização está há 5 anos no ramo de Instalação, manutenção, higienização e contratos de manutenção preventiva e corretiva de Ar Condicionado, com profissionais com experiência de 16 anos na área. A nossa empresa está preparada para atender clientes de pequeno, médio e grande porte, oferecendo sempre uma solução inteligente e econômica para quem precisa desses serviços. Podemos contribuir de forma positiva para sua empresa, com serviços realizados de acordo com as normas de qualidade que prezamos dentro da nossa organização, incluindo garantia em todos os serviços prestados. Buscamos estabelecer uma relação transparente com os nossos clientes, oferecendo suporte através do atendimento diferenciado.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}