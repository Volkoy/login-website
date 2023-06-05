import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectRoutes = () => {
  const { user } = useAuth();

  return user != null ? <Outlet /> : <Navigate to="/login" exact />;
};
