import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import { StrictMode } from 'react';
// import { AuthContext } from './Contexts/AuthContext.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Orders from './Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Profile from './Profile.jsx';
import Dashboard from './Components/Dashboard.jsx';


 



const router = createBrowserRouter([
  {
    path: "/",
Component:Root,
children: [
  {
  
index: true,
Component: Home   
  
},
{path:"/login",
  Component: Login
},

{path:"/register",

Component: Register
},
{
  path:'/orders',
element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
},
{
  path:"/profile",
  element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
},
{
  path:'/dashboard',
  element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
}
],
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />

</AuthProvider>
  </StrictMode>,
)
