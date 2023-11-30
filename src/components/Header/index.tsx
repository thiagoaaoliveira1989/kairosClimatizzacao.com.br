import Logo from '../../assets/logo2.png';
import Clock from '../../assets/icons8-tempo-64.png';
import Agenda from '../../assets/calendario.png'
import Calendario from '../../assets/calendario2.png'
import Phone from '../../assets/icons8-telefone-64.png';
import { NavItem } from '../animations/NavItem/intex';
import { useState } from 'react';

export const Header = () => {

    const [hoveredInicio, setHoveredInicio] = useState(false);
    const [hoveredServicos, setHoveredServicos] = useState(false);
    const [hoveredGaleria, setHoveredGaleria] = useState(false);
    const [hoveredQuemSomos, setHoveredQuemSomos] = useState(false);
    const [hoveredContateNos, setHoveredContateNos] = useState(false);
    const [hoveredTrabalheConosco, setHoveredTrabalheConosco] = useState(false);



    return (
        <header className="flex flex-col w-[100vw] ">
            <div className="flex items-center justify-center w-[100%] h-[90px] bg-grey0">
                <div className="container m-auto w-[100%] h-[100%] ">
                    <ul className='flex gap-3 h-[100%] justify-between'>
                        <li className='flex flex-col items-end p-[10px]'>
                            <a href="" className='flex items-center gap-2'>
                                <img src={Agenda} alt="" />
                                <div className='flex flex-col items-center gap-2'>
                                    <p className='text-fontPrimary font-bold text-[1.2rem]'>Seg.-Sex.: 09:00 - 18:00</p>
                                    <span className='text-fontSecundary font-normal text-[0.9rem]'>Serviço de Emergência 24h</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex flex-col items-end p-[10px]'>
                            <a href="" className='flex items-center gap-2'>
                                <img src={Clock} alt="" />
                                <div className='flex flex-col items-center gap-2'>
                                    <p className='text-fontPrimary font-bold text-[1.2rem]'>Chamado Técnico <span className='text-[0.5rem] font-bold'>SOMENTE CONTRATOS</span> </p>
                                    <span className='text-fontSecundary font-normal text-[0.9rem]'>Abra aqui seu chamado</span>
                                </div>
                            </a>
                        </li>
                        <li className='flex flex-col items-end p-[10px]'>
                            <a href="" className='flex items-center gap-2'>
                                <img src={Phone} alt="" />
                                <div className='flex flex-col items-start gap-2'>
                                    <p className='text-fontPrimary font-bold text-[1.2rem]'>Técnico Jhonny: +55 21 99059-7169  </p>
                                    <p className='text-fontPrimary font-bold text-[1.2rem]'>Técnico Marcelo: +55 21 99187-7202</p>
                                </div>
                            </a>
                        </li>
                        <li className='flex flex-col  p-[10px] items-center bg-primary max-w-[300px] w-[100%]'>
                            <a href="" className='flex items-center gap-2 animate-bounce '>
                                <img src={Calendario} alt="" />
                                <div className='flex flex-col items-start '>
                                    <p className='font-bold text-[20px] text-white max-w-[150px] font-roleway leading-[2rem]'>AGENDE AQUI UMA VISITA</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className=' w-[100%] h-[115px] bg-grey1'>
                <div className='container m-auto w-[100%] py-[10px] flex justify-between'>
                    <img src={Logo} alt="logo-site" className='w-[200px]' />
                    <nav className='flex justify-center items-center'>
                        <ul className="flex gap-[2rem]">
                            <NavItem text="Inicio" animatedProps={{ hovered: hoveredInicio, setHovered: setHoveredInicio }} />
                            <NavItem text="Serviços" animatedProps={{ hovered: hoveredServicos, setHovered: setHoveredServicos }} />
                            <NavItem text="Galeria" animatedProps={{ hovered: hoveredGaleria, setHovered: setHoveredGaleria }} />
                            <NavItem text="Quem somos" animatedProps={{ hovered: hoveredQuemSomos, setHovered: setHoveredQuemSomos }} />
                            <NavItem text="Contate-nos" animatedProps={{ hovered: hoveredContateNos, setHovered: setHoveredContateNos }} />
                            <NavItem text="Trabalhe conosco" animatedProps={{ hovered: hoveredTrabalheConosco, setHovered: setHoveredTrabalheConosco }} />
                        </ul>


                    </nav>
                </div>
            </div>
        </header>
    );
};