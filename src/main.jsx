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
import { AuthContext } from './Contexts/AuthContext.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';


 



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
<AuthProvider>
<RouterProvider router={router} />

</AuthProvider>
  </StrictMode>,
)
