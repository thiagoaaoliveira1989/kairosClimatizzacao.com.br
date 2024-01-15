import { useState } from "react";
import ArCondicionado from "../../assets/ar-condicionado.png"
import ArCondicionado2 from "../../assets/ar-condicionado2.png"
import { motion } from 'framer-motion';
import { ManutencaoModal } from "../Modals/Manutencao";
import { LimpezaModal } from "../Modals/Limpeza";
import { InstalacaoModal } from "../Modals/Instalacoes";

export const ServicesSection = () => {

    const [isModalOpenManutencao, setModalOpenManutencao] = useState(false);
    const [isModalOpenLimpeza, setModalOpenLimpeza] = useState(false);
    const [isModalOpenInstalacao, setModalOpenInstalacao] = useState(false);

    const handleOpenAndCloseModalManutencao = () => {
        setModalOpenManutencao(!isModalOpenManutencao);
    };

    const handleOpenAndCloseModalLimpeza = () => {
        setModalOpenLimpeza(!isModalOpenLimpeza);
    };

    const handleOpenAndCloseModalInstalacao = () => {
        setModalOpenInstalacao(!isModalOpenInstalacao);
    };


    return (
        <>
            {isModalOpenManutencao === true ? <ManutencaoModal handleOpenAndCloseModalManutencao={handleOpenAndCloseModalManutencao} /> : null}
            {isModalOpenLimpeza === true ? <LimpezaModal handleOpenAndCloseModalLimpeza={handleOpenAndCloseModalLimpeza} /> : null}
            {isModalOpenInstalacao === true ? <InstalacaoModal handleOpenAndCloseModalInstalacao={handleOpenAndCloseModalInstalacao} /> : null}
            <section id="services" className="w-[100%] h-[100vh]">
                <div className="flex flex-col items-center">
                    <h1 className="mt-[80px] lg:mt-[130px] text-[2.5rem] lg:text-[3.5rem] font-bold">Serviços Prestados</h1>
                    <ul className="flex flex-col gap-4 mt-[2rem] lg:flex lg:flex-row lg:gap-6 lg:mt-[4] lg:mb-[60px]">
                        <li className="flex flex-col items-center justify-center w-[300px] bg-secundary rounded-2xl p-[20px] text-primary ">
                            <div className="w-max-[100%]">
                                <p className="font-bold text-[20px] text-center">Manutenção Preventiva e Corretiva</p>
                            </div>
                            <div className="mt-4">
                                <img src={ArCondicionado2} alt="manutençao-arcondicionado" width={200} />
                            </div>
                            <motion.a whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="rounded-full bg-blue1 px-4 py-4 text-white font-bold hover:text-secundary hover:bg-primary mt-[15px]" onClick={handleOpenAndCloseModalManutencao} href="#services">Informações</motion.a>
                        </li>

                        <li className=" flex flex-col items-center justify-center w-[300px] bg-secundary rounded-2xl p-[20px] text-primary ">
                            <div className="w-max-[100%]">
                                <p className="font-bold text-[20px] text-center">Limpeza e Higienização</p>
                            </div>
                            <div className="mt-4">
                                <img src={ArCondicionado} alt="manutençao-arcondicionado" width={200} />
                            </div>
                            <motion.a whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="rounded-full bg-blue1 px-4 py-4 text-white font-bold hover:text-secundary hover:bg-primary mt-[15px]" onClick={handleOpenAndCloseModalLimpeza} href="#services">Informações</motion.a>
                        </li>

                        <li className=" flex flex-col items-center justify-center w-[300px] bg-secundary rounded-2xl p-[20px] text-primary ">
                            <div className="w-max-[100%]">
                                <p className="font-bold text-[20px] text-center">Instalações</p>
                            </div>
                            <div className="mt-4">
                                <img src={ArCondicionado2} alt="manutençao-arcondicionado" width={200} />
                            </div>
                            <motion.a whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="rounded-full bg-blue1 px-4 py-4 text-white font-bold hover:text-secundary hover:bg-primary mt-[15px]" onClick={handleOpenAndCloseModalInstalacao} href="#services">Informações</motion.a>
                        </li>

                    </ul>
                </div>
            </section >

        </>
    )
}