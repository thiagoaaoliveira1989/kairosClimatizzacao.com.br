import { ContatoForm } from "../Forms/ContatoForm"


export const ContatoSection = () => {
    return (
        <>
            <section id="contato" className="w-[100%] h-[100vh]" >
                <div className="flex flex-col items-center">
                    <h1 className="mt-[80px] lg:mt-[130px] text-[2.5rem] lg:text-[3.5rem] font-bold">Formulário de Contato</h1>
                    <ContatoForm />
                </div>
            </section >
        </>
    )
}