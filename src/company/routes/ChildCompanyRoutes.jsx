import { Company } from "../pages/Company"
import { Navigate } from "react-router-dom"
import { CreateInterview, Project, SearchCandidateExperience } from "../views"
 
export const ChildCompanyRoutes = [
    {   index: true,
        path: "dashboard",
        element: <Company />
    },
    {
        path: "search",
        element: <SearchCandidateExperience />
      
    },
    {
        path: "project",
        element: <Project />
      
    },
    // {
    //     path: "assesment",
    //     element: <SearchCandidateExperience />
      
    // },
    {
        path: "interview",
        element: <CreateInterview />
      
    },
    {
        path: "*",
        element: <Navigate to={"dashboard"}/>
      
    },
 
]