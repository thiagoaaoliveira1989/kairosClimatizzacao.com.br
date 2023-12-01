import { BannerSection } from "../../../components/BannerSection";
import { DefaultTemplate } from "../../../components/DefaultTemplate";


export const HomePage = () => {
    return (
        <DefaultTemplate>
            <main className="flex-1 w-[100%] mt-[115px]" >
                <BannerSection />
            </main>
        </DefaultTemplate>
    )
}