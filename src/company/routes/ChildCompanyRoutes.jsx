
import { Navigate } from "react-router-dom"
import { SearchCandidateExperience } from "../views"
import { Company } from "../pages/Company"
 
export const ChildCompanyRoutes = [
    {   index: true,
        path: "dashboard",
        element: <Company />
    },
    {
        path: "*",
        element: <Navigate to={"dashboard"}/>
      
    },
    {
        path: "search",
        element: <SearchCandidateExperience />
      
    }
 
]