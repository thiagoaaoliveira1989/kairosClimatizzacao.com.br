import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import Logo from '../../../assets/logo2.png';
import Avatar from '../../../assets/avatar.png';
import { IoCalendarNumberOutline, IoCalendarOutline, IoImagesOutline, IoPeopleOutline, IoPerson, IoChatboxEllipsesOutline } from "react-icons/io5";
import { ListUsers } from "../../../components/Users/ListUsers";
import { ListContactForms } from "../../../components/dashboard/contactForm/contactList";
import { ListIndividualClients } from "../../../components/dashboard/individualClient/intex";


export const Dashboard = () => {
    const { userLogout, user } = useContext(UserContext);


    const [handleListUsers, setHandleListUsers] = useState(false);
    const [handleListContactForm, setHandleListContactForm] = useState(false);
    const [handleListIndividualClient, setHandleListIndividualClien] = useState(false);



    return (
        <div className="w-screen h-screen overflow-hidden">
            <header className="bg-primary h-[80px]">
                <div className="flex justify-between w-full  px-[3rem] m-auto">
                    <figure className=" w-[100%] flex items-center">
                        <img src={Logo} className="w-[120px]" alt="" />
                    </figure>
                    <button onClick={userLogout} className="btn bg-secundary   text-white p-[2rem] font-bold hover:bg-blue-300 hover:text-primary">Logout</button>
                </div>
            </header>
            <main className="w-100 h-[100%] flex ">
                <section className="bg-primary w-[25rem] h-100  py-[2rem] flex flex-col gap-[4rem]">
                    <div className="flex gap-4 text-white px-[3rem]">
                        <img src={Avatar} className="w-[50px]" alt="" />
                        <div className="flex flex-col gap-4">
                            <p> {user?.username} </p>
                            <p> {user?.email} </p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-1 flex-col font-primary text-white cursor-pointer ">
                            <li onClick={() => { setHandleListUsers(!handleListUsers), setHandleListContactForm(false), setHandleListIndividualClien(false) }} className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoPerson size={25} />Usuarios</li>
                            <li onClick={() => { setHandleListIndividualClien(!handleListIndividualClient), setHandleListUsers(false), setHandleListContactForm(false) }} className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoPeopleOutline size={25} /> Clientes</li>
                            <li onClick={() => { setHandleListUsers(false), setHandleListContactForm(!handleListContactForm), setHandleListIndividualClien(false) }} className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoChatboxEllipsesOutline size={25} /> Formulario de Contato</li>
                            <li className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoCalendarNumberOutline size={25} /> Agenda de Orçamentos</li>
                            <li className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoCalendarOutline size={25} /> Agenda Contratos</li>
                            <li className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoImagesOutline size={25} /> Fotos Galeria</li>
                        </ul>
                    </div>
                </section>
                <section className="bg-gray-300 w-[80vw] h-full">
                    <div className="p-[2rem] flex flex-col gap-2 items-start">
                        <h1 className="flex center m-auto items-center text-[3rem] font-bold">Dashboard</h1>
                        <p className="text-[1.2rem] ">Seja bem vindo(a) <span className="font-bold">{user?.username}</span></p>
                    </div>
                    {handleListUsers === true ? <ListUsers /> : null}
                    {handleListContactForm === true ? <ListContactForms /> : null}
                    {handleListIndividualClient === true ? <ListIndividualClients /> : null}
                </section>

            </main>
            <footer>

            </footer>
        </div>
    )
}