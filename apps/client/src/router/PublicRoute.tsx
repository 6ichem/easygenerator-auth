import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "./constants";
import { getAuthToken } from "../core/utils";

const PublicRoute = () => {
  const isAuthenticated = !!getAuthToken();

  if (!isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to={ROUTE_PATHS.SIGN_IN} />;
};

export default PublicRoute;
