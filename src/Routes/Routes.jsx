import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Admission from "../Pages/Admission/Admission";
import MyColleges from "../Pages/MyCollege/MyColleges";
import NotFound from "../components/NotFound/NotFound";
import AllColleges from "../Pages/Colleges/AllColleges";
import SingleCollege from "../Pages/Colleges/SingleCollege";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"colleges",
                element: <AllColleges></AllColleges>
            },
            {
                path:"admission",
                element: <Admission></Admission>
            },
            {
                path:"myCollege",
                element: <MyColleges></MyColleges>
            },
            {
                path:"colleges/:id",
                element: <SingleCollege></SingleCollege>
            }
        ]
    },
    {
        path:"*",
        element: <NotFound></NotFound>
    }
]);

export default router;