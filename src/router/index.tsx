import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorPage } from "../pages/public/ErrorPage";
import { Header } from "../components/Header";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Header />} />
      </Route>
      <Route element={<PrivateRoutes />} >

      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
