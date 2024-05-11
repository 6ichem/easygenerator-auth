import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "../app/sign-in";
import SignUp from "../app/sign-up";
import { ROUTE_PATHS } from "./constants";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../app/home";
import PublicRoute from "./PublicRoute";

const protectedRoutes = [
  {
    path: ROUTE_PATHS.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: ROUTE_PATHS.SIGN_UP,
    element: <SignUp />,
  },
];

const publicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
  },
];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTE_PATHS.HOME} replace />,
  },
  {
    element: <PublicRoute />,
    children: [...protectedRoutes],
  },
  {
    element: <ProtectedRoute />,
    children: [...publicRoutes],
  },
]);
