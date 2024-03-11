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
                                <a href="https://www.facebook.com/kairosRefrigeracaoEletrica" target='_blank'> 
                                <img src={Face} alt="" className='w-[48px]' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/climatizacao_kairos/" target='_blank'> 
                                <img src={Insta} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@kairosclimatizacao.com.br" target='_blank'> 
                                <img src={Gmail} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/message/FSUD3TCS5YXFN1?autoload=1&app_absent=0" target='_blank'> 
                                <img src={Whats} alt=""  className='w-[48px]'/>
                                </a>
                            </li>
                        </ul>
                        <p className="text-white text-center font-bold">COPYRIGHT © 2023 Kairós Climatização Todos os direitos reservados.</p>
                        <span className="text-white text-center font-bold">Desenvolvido por <span className='text-secundary hover:text-white'><a href="https://www.linkedin.com/in/thiagoaaoliveira1989/" target='_blank'>Thiago Araujo</a></span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
