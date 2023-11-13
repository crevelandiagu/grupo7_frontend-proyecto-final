import { Company } from "../pages/Company"
import { Navigate } from "react-router-dom"
 
export const ChildCompanyRoutes = [
    {   index: true,
        path: "dashboard",
        element: <Company />
    },
    {
        path: "*",
        element: <Navigate to={"dashboard"}/>
      
    },
 
]