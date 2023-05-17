import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/Error/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children :[
         {
            path :'/',
            element : <Home></Home>
         },
         {
           path :'/login' ,
           element:<Login></Login>
         },
         {
            path:'/register',
            element:<Register></Register>
         }
      ]
    },
    {
        path:'*' ,
        element : <ErrorPage></ErrorPage>
    }
  ]);

  export default router ;
  