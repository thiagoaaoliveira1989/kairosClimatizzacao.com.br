import { motion, AnimatePresence } from 'framer-motion';
import Foto1 from '../../assets/galeria/foto (1).jpeg';
import Foto2 from '../../assets/galeria/foto (2).jpeg';
import Foto3 from '../../assets/galeria/foto (3).jpeg';
import Foto4 from '../../assets/galeria/foto (4).jpeg';
import Foto5 from '../../assets/galeria/foto (5).jpeg';
import Foto6 from '../../assets/galeria/foto (6).jpeg';
import Foto7 from '../../assets/galeria/foto (7).jpeg';
import Foto8 from '../../assets/galeria/foto (8).jpeg';
import Foto9 from '../../assets/galeria/foto (9).jpeg';
import Foto10 from '../../assets/galeria/foto (10).jpeg';
import Foto11 from '../../assets/galeria/foto (11).jpeg';
import Foto12 from '../../assets/galeria/foto (12).jpeg';
import Foto13 from '../../assets/galeria/foto (13).jpeg';
import Foto14 from '../../assets/galeria/foto (14).jpeg';
import Foto15 from '../../assets/galeria/foto (15).jpeg';
import Foto16 from '../../assets/galeria/foto (16).jpeg';
import { useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const images = [
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
    Foto7,
    Foto8,
    Foto9,
    Foto10,
    Foto11,
    Foto12,
    Foto13,
    Foto14,
    Foto15,
    Foto16,
    // Adicione mais URLs conforme necessário
];

export const GallerySection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="galeria" className="w-[100vw] h-[100vh] pt-1 mt-[400px] sm:mt-[200px] lg:mt-[-210px] xl:mt-[-300px] 2xl:mt-[-250px]" >
            <h1 className="mt-[80px] lg:mt-[130px] text-[2.5rem] lg:text-[3.5rem] text-center font-bold">Galeria</h1>
            <div className='relative top-0 left-0 w-full h-full'>
                <AnimatePresence  >
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        /*   style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }} */
                        className='w-[100vw] px-[3rem] mt-[4rem] absolute  top-0 left-0 right-0 bottom-0 flex justify-center align-center'
                    >
                        <motion.img
                            src={images[currentImage]}
                            alt={`Imagem ${currentImage + 1}`}
                            className=' w-[100%] lg:w-[50%] 2xl:w-[40%] 2xl:h-[90%] h-[80%]'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </motion.div>
                </AnimatePresence>

                <div className='absolute top-[45%] px-[4rem] w-[100%] 2xl:px-[25rem] flex justify-between'>
                    <button
                        onClick={handlePrev}
                        className=' font-bold '>
                        <FaCircleArrowLeft
                            className="text-[50px] text-blue-800" />
                    </button>
                    <button
                        onClick={handleNext}
                        className='text-[50px] text-blue-800'>
                        <FaCircleArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

