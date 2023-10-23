import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const CandidateRoutes = () => {
  
  const { status} = useAuthStore();

  if (status === 'authenticated') {
    return <Navigate to="/auth/signin" />
  }

  return <Outlet />
}