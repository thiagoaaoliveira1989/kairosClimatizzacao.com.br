import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import Logo from '../../../assets/logo2.png';
import Avatar from '../../../assets/avatar.png';
import { IoCalendarNumberOutline, IoCalendarOutline, IoImagesOutline, IoPeopleOutline, IoPerson } from "react-icons/io5";
import { ListUsers } from "../../../components/Users/ListUsers";


export const Dashboard = () => {
    const [handleListUsers, setHandleListUsers] = useState(false);

    const { userLogout, user } = useContext(UserContext);




    return (
        <>
            <header className="bg-primary">
                <div className="flex justify-between w-full h-[80px] px-[3rem] m-auto">
                    <figure className="h-[100%] w-[100%] flex items-center">
                        <img src={Logo} className="w-[120px]" alt="" />
                    </figure>
                    <button onClick={userLogout} className="btn bg-secundary   text-white p-[2rem] font-bold hover:bg-blue-300 hover:text-primary">Logout</button>
                </div>
            </header>
            <main className="w-100 h-[100vh] flex ">
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
                            <li onClick={() => setHandleListUsers(!handleListUsers)} className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoPerson size={25} />Usuarios</li>
                            <li className=" hover:text-gray-300 hover:bg-blue-300 hover:text-primary px-[3rem] py-[2rem] flex gap-5 items-center"> <IoPeopleOutline size={25} /> Clientes</li>
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
                </section>

            </main>
            <footer>

            </footer>
        </>
    )
}