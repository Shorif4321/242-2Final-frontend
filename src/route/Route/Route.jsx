import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from './../../pages/About/About';
import NotFound from "../../pages/Shared/NotFound/NotFound";
import ContactPage from "../../pages/Contact/ContactPage";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";

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
        path:"*",
        element:<NotFound></NotFound>

    }
])

export default router