import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes: React.FC = () => {

  const token = localStorage.getItem('@Token');


  return token ? <Outlet /> : <Navigate to="/" />


};
