import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Registration from "../Page/Registration/Registration";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },

        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Registration></Registration>
        }
      ]
    },
  ]);