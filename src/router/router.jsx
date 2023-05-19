import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import MyToys from "../pages/Home/MyToys/MyToys";
import AddToy from "../pages/Home/AddToy/AddToy";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import ToyShop from "../pages/Home/ToyShop/ToyShop";


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
            element:<ToyShop></ToyShop>
        },
        {
            path:'mytoys',
            element:<PrivateRouter><MyToys></MyToys></PrivateRouter>
        },
        {
            path:'addtoy',
            element:<PrivateRouter><AddToy></AddToy></PrivateRouter>
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