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
import SingleToyDetailsUpdate from "../Pages/SingleToyDetailsUpdate/SingleToyDetailsUpdate";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ErrorElement from "../Pages/Error/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorElement/>,
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
            element:<AllToyes/>,
            loader: ()=> fetch('https://toy-monster-server.vercel.app/toys')
        },
        {
            path:"/mytoys",
            element:<PrivetRoute><MyToys/></PrivetRoute>
        },
        {
            path:"/addtoys",
            element: <PrivetRoute><AddToys/></PrivetRoute>
        },
        {
            path:"/singletoy/:id",
            element: <PrivetRoute><SingleToyDetailsUpdate/></PrivetRoute>,
            loader:({params}) => fetch(`https://toy-monster-server.vercel.app/toys/${params.id}`)
        },
        {
            path:"/toyditails/:id",
            element:<PrivetRoute><ToyDetails/></PrivetRoute>,
            loader:({params}) => fetch(`https://toy-monster-server.vercel.app/toys/${params.id}`)
        },
      ]
    },
  ]);

export default router;