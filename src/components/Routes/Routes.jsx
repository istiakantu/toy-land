import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToys/AddToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('https://toy-land-server-murex.vercel.app/toys')
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://toy-land-server-murex.vercel.app/toy/${params.id}`)
                
            },
            {
                path:'update/:id',
                element: <PrivateRoute> <UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params})=> fetch(`https://toy-land-server-murex.vercel.app/toy/${params.id}`)
            }
        ]
    },
]);

export default router