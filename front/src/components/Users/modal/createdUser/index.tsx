import React, { useContext, useState } from "react";
import { UserContext } from "../../../../providers/UserContext";

export const CreateUserModal = () => {
  const { userCreate, openModal } = useContext(UserContext);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    admin: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione sua lógica para lidar com a submissão do formulário (por exemplo, enviar dados para o servidor)
    console.log("Usuário criado:", userData);
    userCreate(userData);
    openModal(); // Feche o modal após a submissão, você pode ajustar isso conforme necessário
  };

  return (
    <section className="bg-black bg-opacity-50 w-[79vw] h-[90vh] flex items-center m-auto z-10 absolute">
      <div className="bg-gray-400 bg-opacity-95 mt-[100px] p-[1rem] container flex m-auto h-auto gap-3 pb-5">
        <button
          onClick={openModal}
          className="btn ml-[-1rem] absolute container z-10 text-primary font-primary text-[2rem] flex justify-end p-4"
        >
          {" "}
          X{" "}
        </button>
        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:w-[90%] lg:w-[50%] mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col"
        >
          <h2 className="mt-[10px] mb-[30px] font-primary text-primary font-bold text-[2rem] text-center">
            Criar Novo Usuário
          </h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nome de Usuário:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="admin" className="flex items-center">
              <input
                type="checkbox"
                id="admin"
                name="admin"
                checked={userData.admin}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600">Admin</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn bg-primary text-white p-2 rounded-full"
          >
            Criar Usuário
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateUserModal;
