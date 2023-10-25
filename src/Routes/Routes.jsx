import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Admission from "../Pages/Admission/Admission";
import MyColleges from "../Pages/MyCollege/MyColleges";
import NotFound from "../components/NotFound/NotFound";
import AllColleges from "../Pages/Colleges/AllColleges";
import SingleCollege from "../Pages/Colleges/SingleCollege";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import PrivateRoute from "./PrivateRoutes";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import ReviewForm from "../Pages/Review/ReviewForm";
import ForgotPassword from "../Pages/Login/ForgotPassword";


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
                element: <PrivateRoute><MyColleges></MyColleges></PrivateRoute>
            },
            {
                path:"colleges/:id",
                element: <PrivateRoute><SingleCollege></SingleCollege></PrivateRoute>
            },
            {
                path:"login",
                element: <Login></Login>
            },
            {
                path:"registration",
                element: <Registration></Registration>
            },
            {
                path:"admission/:id",
                element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>
            },
            {
                path:"review/:id",
                element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>
            },
            {
                path:"reset",
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    },
    {
        path:"*",
        element: <NotFound></NotFound>
    }
]);

export default router;