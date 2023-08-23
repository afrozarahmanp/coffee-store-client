import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Home from './Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: ()=> fetch('https://coffee-store-server-afrozarahmanp.vercel.app/coffees')
  },
  {
    path: 'addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updatecoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`https://coffee-store-server-afrozarahmanp.vercel.app/coffees/${params.id}`)
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
