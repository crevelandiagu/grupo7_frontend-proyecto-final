import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const CompanyRoutes = () => {
  
  const { status} = useAuthStore();

  if (status === 'not-authenticated') {
    return <Navigate to="/auth/signin" />
  }

  return <Outlet />
}