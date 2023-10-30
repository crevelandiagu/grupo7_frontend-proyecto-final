import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ChildAuthRoutes } from "../auth/routes/ChildAuthRoutes";
import { CandidateRoutes } from "../candidate/routes/CandidateRoutes";
import { ChildCandidateRoutes } from "../candidate/routes/ChildCandidateRoutes";
import { CompanyRoutes } from "../company/routes/CompanyRoutes";
import { ChildCompanyRoutes } from "../company/routes/ChildCompanyRoutes";

import { Landing } from "../auth/pages/Landing";
import { useEffect } from "react";
import { useAuthStore } from "../hooks";

import { AppTheme } from "../theme";

const router = createBrowserRouter([
  { 
    path: "/",
    // element: <Landing />,
    element: <Landing />
    
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
  });

  if (status === 'checking') {
    return <div>Cargando...</div>
  }

  return (
    <AppTheme>
      <RouterProvider 
        router={router}
        // future={{ v7_startTransition: true }} 
      />
    </AppTheme>
  )
}