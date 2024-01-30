import Face from '../../assets/facebook.png';
import Gmail from '../../assets/gmail.png';
import Insta from '../../assets/instagran.png';
import Whats from '../../assets/whats.png';

export const Footer = () => {
    return (
        <footer className="flex-shrink-0 sm:mt-[4rem] md:mt-[1rem] xl:mt-[20rem] 2xl:mt-[1rem]">
            <div className="flex items-center justify-center w-full h-[300px] bg-primary">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <ul className='flex flex-row gap-6'>
                            <li>
                                <a href=""> 
                                <img src={Face} alt="" className='w-[48px]' />
                                </a>
                            </li>
                            <li>
                                <a href=""> 
                                <img src={Insta} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                            <li>
                                <a href=""> 
                                <img src={Gmail} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                            <li>
                                <a href=""> 
                                <img src={Whats} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                        </ul>
                        <p className="text-white text-center font-bold">COPYRIGHT © 2023 Kairós Climatização Todos os direitos reservados.</p>
                        <span className="text-white text-center font-bold">Desenvolvido por <span className='text-secundary hover:text-white'>Thiago Araujo</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
