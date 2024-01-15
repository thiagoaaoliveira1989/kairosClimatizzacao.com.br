import { useState } from "react";
import Banner1 from "../../assets/banner1.jpg";
import { motion } from "framer-motion";
import AgendamentoModal from "../Modals/Agendamento";

export const BannerSection = () => {


    const [handleModalAgendamento, setHandleModalAgendamento] = useState(false);


    const openModal = () => {
        setHandleModalAgendamento(!handleModalAgendamento);
    }



    return (
        <>
            {handleModalAgendamento === true ? (
                <div className="sm:top-[150px] relative z-1">
                    <AgendamentoModal openModal={openModal} />
                </div>
            ) : null}

            <section className="mt-[90px] w-[100vw]" >

                <div className="sm:flex sm:flex-col lg:flex-row ">
                    <div className="sm:w-[100%] lg:w-[65%]">
                        <img src={Banner1} alt="banner" className="w-[100%]" />
                    </div>
                    <div className="flex flex-col items-center justify-center sm:w-[100%] lg:w-[35%] px-[2rem] py-[1rem] gap-[3rem]">
                        <div className="w-[100%] flex flex-col gap-[1rem]">
                            <motion.h3
                                initial={{ opacity: 0, scale: 1.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className="text-center text-[1.2rem] lg:text-[1.5rem] font-bold text-secundary leading-[1.5rem] lg:leading-[2rem]" > SATISFAÇÃO GARANTIDA EM TUDO QUE FAZEMOS</motion.h3>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className="text-[1.5rem] lg:text-[2.5rem] font-bold text-primary text-center leading-[1.5rem] lg:leading-[3.5rem]">Especialistas em Ar Condicionado Climatização e Refrigeração</motion.h1>
                        </div>
                        <div className="flex gap-6">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className=" text-center rounded-full bg-secundary px-4 py-4 text-white font-bold hover:text-secundary hover:bg-primary" href="#contato">Entrar em Contato</motion.a>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="text-center rounded-full bg-secundary px-4 py-4 text-white  font-bold hover:text-secundary hover:bg-primary" onClick={openModal}>Agendar Visita</motion.button>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}