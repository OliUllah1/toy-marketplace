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
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";
import UpdatedToyInfo from "../pages/Home/UpdatedToyInfo/UpdatedToyInfo";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/alltoys',
            element:<ToyShop></ToyShop>
        },
        {
            path:'/alltoys/:id',
            element:<PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
            loader:({params})=>fetch(`https://toy-marketplace-server-flax.vercel.app/toys/${params.id}`)
        },
        {
            path:'/mytoys',
            element:<PrivateRouter><MyToys></MyToys></PrivateRouter>
        },
        {
            path:'/addtoy',
            element:<PrivateRouter><AddToy></AddToy></PrivateRouter>
        },
        {
            path:'/updatedtoy/:id',
            element:<UpdatedToyInfo></UpdatedToyInfo>,
            loader:({params})=>fetch(`http://localhost:5000/mytoys/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);



export default router;