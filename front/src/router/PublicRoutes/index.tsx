import { Navigate, Outlet } from 'react-router-dom';


export const PublicRoutes: React.FC = () => {
  const token = localStorage.getItem('@Token');

  return token  === null ? <Outlet /> : <Navigate to="/admin/dashboard" />

};
