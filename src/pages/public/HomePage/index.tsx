import { BannerSection } from "../../../components/BannerSection";
import { ContatoSection } from "../../../components/ContatoSection";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { GallerySection } from "../../../components/GaleriaSection";
import { QuemSomosSection } from "../../../components/QuemSomosSection";
import { ServicesSection } from "../../../components/SevicesSection";


export const HomePage = () => {
    return (
        <DefaultTemplate>
            <main className="w-[100%]" >
                <BannerSection />
                <ServicesSection />
                <GallerySection />
                <QuemSomosSection />
                <ContatoSection />
            </main>
        </DefaultTemplate>
    )
}