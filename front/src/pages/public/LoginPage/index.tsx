import { ToastContainer } from "react-toastify"
import { Footer } from "../../../components/Footer"
import { LoginForm } from "../../../components/Forms/LoginForm"
import { Header } from "../../../components/Header"

export const LoginPage = () => {
    return (
        <>
            <Header />
            <main>
                <section id="contato" className="w-[100%] h-[100vh]" >
                    <div className="flex flex-col items-center">
                        <h1 className="mt-[80px] lg:mt-[180px] text-[2.5rem] lg:text-[3.5rem] font-bold">Login</h1>
                        <LoginForm />
                    </div>
                </section >

            </main>
            <Footer />
            <ToastContainer />
        </>
    )
}