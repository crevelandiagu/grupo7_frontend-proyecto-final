import { SignUp } from "../pages/SignUp"
import { SignIn } from "../pages/SignIn"
import { Navigate } from "react-router-dom"
import { Landing } from "../pages/Landing"
 
export const ChildAuthRoutes = [
  // { 
    
  //   path: "landing",
  //   element: <Landing />
  // },
  {
    path: "signup",
    element: <SignUp />
  },
  {   
      
    path: "signin",
    element: <SignIn />
  },
  {
    path: "*",
    element: <Navigate to={"/"}/>
    
  }
]