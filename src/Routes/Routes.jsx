import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToyes from "../Pages/AllToyes/AllToyes";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import PrivetRoute from "./PrivetRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/blogs",
            element:<Blogs/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:"/alltoys",
            element:<AllToyes/>
        },
        {
            path:"/mytoys",
            element:<PrivetRoute><MyToys/></PrivetRoute>
        },
        {
            path:"/addtoys",
            element: <PrivetRoute><AddToys/></PrivetRoute>
        },
      ]
    },
  ]);

export default router;