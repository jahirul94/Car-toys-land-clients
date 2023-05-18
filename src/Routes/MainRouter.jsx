import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import ToysDetails from "../pages/AllToys/ToysDetails";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children :[
         {
            path :'/',
            element : <Home></Home>,
         },
         {
           path :'/login' ,
           element:<Login></Login>
         },
         {
            path:'/register',
            element:<Register></Register>
         },
         {
            path:"/blogs",
            element:<Blog></Blog>
         },
         {
          path:'/allToys',
          element : <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/allToys')
         },
         {
          path:'/allToys/:id',
          element : <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
         },
         {
          path:'/addAToys',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
         },
         {
          path :'/myToys',
          element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
         }
      ]
    },
    {
        path:'*' ,
        element : <ErrorPage></ErrorPage>
    }
  ]);

  export default router ;
  