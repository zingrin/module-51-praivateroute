import { Component, StrictMode } from 'react'
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

const router = createBrowserRouter([
  {
    path: "/",
Component:Root,
children: [
  {
  
index: true,
Component: Home   
  
},
{path:"login",
  Component: Login
},

{path:"register",

Component: Register
},
],
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>,
)
