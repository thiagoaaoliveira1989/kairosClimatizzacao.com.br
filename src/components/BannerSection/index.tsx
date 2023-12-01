import Banner1 from "../../assets/banner1.jpg";

export const BannerSection = () => {
    return (
        <>
            <section className="" >
                <div className="flex">
                    <div className="w-[65%]">
                        <img src={Banner1} alt="banner" className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-[35%] px-[2rem] gap-[4rem]">
                        <div className="flex flex-col gap-7">
                            <h3 className="text-[1.5rem] font-bold text-secundary">SATISFAÇÃO GARANTIDA EM TUDO QUE FAZEMOS</h3>
                            <h1 className="text-[2.5rem] font-bold text-primary text-center leading-[4.5rem]">Especialistas em Ar Condicionado Climatização e Refrigeração</h1>
                        </div>
                        <div className="flex gap-6">
                            <button className="rounded-full bg-secundary px-4 py-4 text-white font-bold hover:text-secundary hover:bg-primary">Entrar em Contato</button>
                            <button className="rounded-full bg-secundary px-4 py-4 text-white  font-bold hover:text-secundary hover:bg-primary">Agendar Visita</button>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}