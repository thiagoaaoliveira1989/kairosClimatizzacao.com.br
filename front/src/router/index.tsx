import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorPage } from "../pages/public/ErrorPage";
import { HomePage } from "../pages/public/HomePage";
import { LoginPage } from "../pages/public/LoginPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoutes />} >

          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        );
};

        export default AppRoutes;
