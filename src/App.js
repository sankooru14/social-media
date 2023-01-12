import Login from "./pages/login/Login"
import Register  from "./pages/register/Register";
import Rightbar from "./components/rightbar/Rightbar";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import Profile from "./components/profile/Profile"
import "./style.scss"
import { Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  
} from "react-router-dom";

import React, { useContext } from "react"
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const {currentUser} = useContext(AuthContext)

  const { darkMode } = React.useContext(DarkModeContext);

  
  

  const Layout = ()=>{
    return (
      
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}><Outlet /></div>
          
          <Rightbar />
          </div>
      </div>
      
    )
  }
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute><Layout /></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/register",
      element:<Register />
    }
  ])
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
