import { CreateProfile } from "../pages/CreateProfile"
import { Dashboard } from "../pages/Dashboard"
import { Navigate } from "react-router-dom"
 
export const ChildCandidateRoutes = [
    {
        path: "create-profile",
        element: <CreateProfile />
    },
    {   index: true,
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <Navigate to={"dashboard"}/>
      
    }
 
]