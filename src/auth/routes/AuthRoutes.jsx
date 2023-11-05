import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const AuthRoutes = () => {

  const { status, profile} = useAuthStore();

  console.log('AuthRoutes-status', status)
  
  if (status === 'authenticated') {
    if (profile === 'candidate') 
      return <Navigate to="/candidate/dashboard" />
    else if (profile === 'company') 
      return <Navigate to="/company/dashboard" />
  }
  
  return <Outlet />
}