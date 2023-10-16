import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ChildAuthRoutes } from "../auth/routes/ChildAuthRoutes";
import { CandidateRoutes } from "../candidate/routes/CandidateRoutes";
import { ChildCandidateRoutes } from "../candidate/routes/ChildCandidateRoutes";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <SignIn />,
  //   // children: ChildAuthRoutes,
  // },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
    children: ChildAuthRoutes,
  },
  {
    path: "/",
    element: <CandidateRoutes />,
    children: ChildCandidateRoutes,
  },

]);


export const AppRouter = () => {
  return (
    <>
      <RouterProvider 
        router={router} 
        // future={{ v7_startTransition: true }}
      />
    </>
  )
}