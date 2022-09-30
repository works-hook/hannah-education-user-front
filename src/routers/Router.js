import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Header = lazy(() => import("../layouts/Header"))

/***** Pages ****/
const Login = lazy(() => import("../views/user/Login"))

const ThemeRoutes = [
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },

      { path: "/login", exact: true, element: <Login /> },
    ],
  },
];

export default ThemeRoutes;
