import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/home/Home/Home.jsx';
import Country from './pages/home/country/Country';
import Cheflayout from './layouts/Cheflayout';
import Details from './pages/details/deatils/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/country/:id',
        element: <Country></Country>,
        loader: ({ params }) => fetch(`http://localhost:5000/countries/${params.id}`)
      }
    ]
  },
  {
    path: '/chef',
    element: <Cheflayout></Cheflayout>,

    children: [
      {
        path: ':id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
