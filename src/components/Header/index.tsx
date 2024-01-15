import Logo from '../../assets/logo2.png';
import Clock from '../../assets/icons8-tempo-64.png';
import Agenda from '../../assets/calendario.png'
import Calendario from '../../assets/calendario2.png'
import Phone from '../../assets/icons8-telefone-64.png';
import { NavItem } from '../animations/NavItem';
import { useEffect, useState } from 'react';
import { AgendamentoModal } from '../Modals/Agendamento';
import ChamadosModal from '../Modals/Chamados';

export const Header = () => {

    const [hoveredInicio, setHoveredInicio] = useState(false);
    const [hoveredServicos, setHoveredServicos] = useState(false);
    const [hoveredGaleria, setHoveredGaleria] = useState(false);
    const [hoveredQuemSomos, setHoveredQuemSomos] = useState(false);
    const [hoveredContateNos, setHoveredContateNos] = useState(false);
    const [hoveredTrabalheConosco, setHoveredTrabalheConosco] = useState(false);
    const [handleModalAgendamento, setHandleModalAgendamento] = useState(false);
    const [handleModalChamados, setHandleModalChamados] = useState(false);

    const openModal = () => {
        setHandleModalAgendamento(!handleModalAgendamento);
    }

    const openModalChamados = () => {
        setHandleModalChamados(!handleModalChamados);
    }


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const menu = document.querySelector('.menu');
            if (scrollY > 0) {
                menu?.classList.remove('translate-y-[90px]')
                menu?.classList.add('translate-y-[0]');
            } else {
                menu?.classList.remove('translate-y-[0]');
                menu?.classList.add('translate-y-[90px]')
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpa o ouvinte de eventos quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>


            {/* Cabeçalho para telas maiores que 320px */}
            <header id="init" className="hidden lg:flex flex-col">
                <div className="flex m-auto w-full h-[90px] bg-grey0">
                    <div className="w-[100%] h-[100%] ">
                        <ul className='flex lg:gap-2 xl:gap-3 w-[100%] h-[100%] justify-between '>
                            <li className='flex flex-col items-end p-[10px]'>
                                <a href="" className='flex items-center gap-2'>
                                    <img src={Agenda} alt="" />
                                    <div className='flex flex-col items-center gap-2'>
                                        <p className='text-fontPrimary font-bold lg:text-[1rem] lg:text-center 2xl:text-[1.2rem]'>Seg.-Sex.: 09:00 - 18:00</p>
                                        <span className='text-fontSecundary font-normal lg:text-[0.7rem] 2xl:text-[0.9rem]'>Serviço de Emergência 24h</span>
                                    </div>
                                </a>
                            </li>
                            <li className='flex flex-col items-end p-[10px]' >
                                <button onClick={openModalChamados} className='flex items-center gap-2'>
                                    <img src={Clock} alt="" />
                                    <div className='flex flex-col items-center gap-2'>
                                        <p className='text-fontPrimary font-bold lg:text-[1rem] lg:text-center 2xl:text-[1.2rem]'  >Chamado Técnico <span className='text-[0.5rem] font-bold'>SOMENTE CONTRATOS</span> </p>
                                        <span className='text-fontSecundary font-normal lg:text-[0.7rem] 2xl:text-[0.9rem]]'>Abra aqui seu chamado</span>
                                    </div>
                                </button>
                            </li>
                            <li className='flex flex-col items-end p-[10px]'>
                                <a href="" className='flex items-center gap-2'>
                                    <img src={Phone} alt="" />
                                    <div className='flex flex-col items-start gap-2'>
                                        <a className='text-fontPrimary font-bold lg:text-[1rem] lg:text-center 2xl:text-[1.2rem]' href='https://wa.me/+5521990597169' target='_blank'>Técnico Jhonny: +55 21 99059-7169  </a>
                                        <a className='text-fontPrimary font-bold lg:text-[1rem] lg:text-center 2xl:text-[1.2rem]' href='https://wa.me/+5521991877202' target='_blank'>Técnico Marcelo: +55 21 99187-7202</a>
                                    </div>
                                </a>
                            </li>
                            <li className='flex flex-col  p-[10px] items-center bg-primary max-w-[300px] w-[100%]' onClick={openModal}>
                                <button className='flex items-center gap-2 animate-bounce pt-4'>
                                    <img src={Calendario} alt="" />
                                    <div className='flex flex-col items-start '>
                                        <p className='font-bold text-[20px] text-white max-w-[150px] font-roleway leading-[2rem]'>AGENDE AQUI UMA VISITA</p>
                                    </div>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='menu w-[100%] h-[115px] bg-primary fixed z-50 transition-transform duration-300 transform translate-y-[90px]'>
                    <div className='w-[100%] h-[100%] px-[2rem] flex items-center justify-between text-center'>
                        <img src={Logo} alt="logo-site" className='w-[12rem] h-[5rem] flex' />
                        <nav className='flex justify-center items-center'>
                            <ul className="flex lg:gap-[1rem] xl:gap-[2rem] ">
                                <NavItem text="Inicio" linked='init' animatedProps={{ hovered: hoveredInicio, setHovered: setHoveredInicio }} />
                                <NavItem text="Serviços" linked='services' animatedProps={{ hovered: hoveredServicos, setHovered: setHoveredServicos }} />
                                <NavItem text="Galeria" linked='galeria' animatedProps={{ hovered: hoveredGaleria, setHovered: setHoveredGaleria }} />
                                <NavItem text="Quem somos" linked='quemsomos' animatedProps={{ hovered: hoveredQuemSomos, setHovered: setHoveredQuemSomos }} />
                                <NavItem text="Contate-nos" linked='contato' animatedProps={{ hovered: hoveredContateNos, setHovered: setHoveredContateNos }} />
                                <NavItem text="Trabalhe conosco" linked='trabalheconosco' animatedProps={{ hovered: hoveredTrabalheConosco, setHovered: setHoveredTrabalheConosco }} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Cabeçalho para telas menores que 320px */}
            <header id="init" className=" lg:hidden flex flex-col">
                <div className="fixed z-40 px-[2rem] flex items-center justify-between w-[100vw] h-[90px] bg-primary">
                    {/* Seu conteúdo para telas menores */}
                    <img src={Logo} alt="logo-site" className='w-[120px]' />
                    <button className='text-black text-[2rem]' onClick={() => alert('Menu clicked')}>☰</button>
                </div>
                {/* Seu menu de navegação aqui */}
            </header>

            {handleModalChamados === true ? <ChamadosModal openModalChamados={openModalChamados} /> : null}
            {handleModalAgendamento === true ? <AgendamentoModal openModal={openModal} /> : null}
        </>



    );
};