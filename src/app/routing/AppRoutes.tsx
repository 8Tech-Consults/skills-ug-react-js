/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { Logout, AuthPage, useAuth } from "../modules/auth";
import { App } from "../App";
import { PublicRoutes } from "./PublicRoutes";

const { BASE_URL } = import.meta.env;
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const AppRoutes: FC = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    if (currentUser.verification != "Yes") {
      var current_url = window.location.href;
      if (!current_url.includes("auth/verify-email")) {
        window.location.href = "/auth/verify-email";
      }
    }
  }

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          <Route path="admin/*" element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
