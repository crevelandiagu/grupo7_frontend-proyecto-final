import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ChildAuthRoutes } from "../auth/routes/ChildAuthRoutes";
import { CandidateRoutes } from "../candidate/routes/CandidateRoutes";
import { ChildCandidateRoutes } from "../candidate/routes/ChildCandidateRoutes";

import { Landing } from "../auth/pages/Landing";
import { useEffect } from "react";
import { useAuthStore } from "../hooks";
import { CompanyRoutes } from "../company/routes/CompanyRoutes";
import { ChildCompanyRoutes } from "../company/routes/ChildCompanyRoutes";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Landing />,
    
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
    children: ChildAuthRoutes,
  },
  {
    path: "/candidate/*",
    element: <CandidateRoutes />,
    children: ChildCandidateRoutes,
  },

  {
    path: "/company/*",
    element: <CompanyRoutes />,
    children: ChildCompanyRoutes,
  },

]);


export const AppRouter = () => {
  
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    console.log('AppRouter: useEffect', status);
    checkAuthToken();
  }, [checkAuthToken, status]);

  if (status === 'checking') {
    return <div>Cargando...</div>
  }

  return (
      <RouterProvider router={router} // future={{ v7_startTransition: true }}
      />
  )
}