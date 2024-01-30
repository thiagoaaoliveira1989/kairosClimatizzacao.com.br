import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { TToken } from '../../types/Ttoken';

export const PublicRoutes: React.FC = () => {
  const storedToken: string | null = localStorage.getItem('Token');
  
  // Use type assertion to tell TypeScript that storedToken is of type string
  const parsedToken: string | null = storedToken ? JSON.parse(storedToken) : null;

  const token: TToken = {
    token: parsedToken || '', // Use '|| '' to provide a default value if the token is null
  };

  return token.token === null ? <Navigate to="/"/> : <Outlet /> ;
};
