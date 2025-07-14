import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from './../../pages/About/About';
import NotFound from "../../pages/Shared/NotFound/NotFound";
import ContactPage from "../../pages/Contact/ContactPage";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import Services from "../../pages/Services/Services";
import DashboardLayout from './../../layout/DashboardLayout/DashboardLayout';
import MyService from "../../pages/Dashboard/MyService/MyService";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AddService from "../../pages/Dashboard/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/about-us',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<ContactPage />
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyService></MyService>
            },
            {
                path:'/dashboard/my-service',
                element:<MyService></MyService>
            },
            {
                path:'/dashboard/all-users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/add-service',
                element:<AddService></AddService>
            }
        ]
    },
    {
        path:"*",
        element:<NotFound></NotFound>

    }
])

export default router