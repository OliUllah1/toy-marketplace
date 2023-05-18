import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import AllToys from "../pages/Home/AllToys/AllToys";
import MyToys from "../pages/Home/MyToys/MyToys";
import AddToy from "../pages/Home/AddToy/AddToy";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'alltoys',
            element:<AllToys></AllToys>
        },
        {
            path:'mytoys',
            element:<MyToys></MyToys>
        },
        {
            path:'addtoy',
            element:<AddToy></AddToy>
        },
        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
      ]
    },
  ]);



export default router;