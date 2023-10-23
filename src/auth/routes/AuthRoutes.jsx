import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const AuthRoutes = () => {

  const { status} = useAuthStore();

  console.log('AuthRoutes-status', status)
  if (status === 'authenticated') {
    return <Navigate to="/candidate/dashboard" />
  }

  return <Outlet />
}