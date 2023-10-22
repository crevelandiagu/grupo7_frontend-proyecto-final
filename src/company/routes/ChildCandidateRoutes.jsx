import { Candidate } from "../pages/Candidate"
import { Navigate } from "react-router-dom"
 
export const ChildCandidateRoutes = [
    {   index: true,
        path: "dashboard",
        element: <Candidate />
    },
    {
        path: "*",
        element: <Navigate to={"dashboard"}/>
      
    }
 
]