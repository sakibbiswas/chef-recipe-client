import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, RouterProvider } from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/home/Home/Home.jsx';
import Country from './pages/home/country/Country';
import Cheflayout from './layouts/Cheflayout';
import Details from './pages/details/deatils/Details';
import Loginlayout from './layouts/Loginlayout';
import Login from './pages/login/Login/Login';
import Authprovider from './providers/Authprovider';
import Register from './pages/login/Register/Register';
import Privaterout from './route/privaterout/Privaterout';
import Rightnav from './shared/Rightnav/Rightnav';
import Error from './errorpage/Error';
import Errorlayout from './layouts/Errorlayout/Errorlayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/country"></Navigate>
  },
  {
    path: '/',
    element: <Loginlayout></Loginlayout>,
    children: [

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/googlelogin',
        element: <Rightnav></Rightnav>
      },


    ]
  },
  {
    path: '/',
    element: <Errorlayout></Errorlayout>,
    children: [
      {
        path: '/error',
        element: <Error></Error>,
      }
    ]
  },
  {
    path: "country",
    element: <Main></Main>,
    children: [

      {
        path: ':id',
        element: <Country></Country>,
        loader: ({ params }) => fetch(`http://localhost:5000/countries/${params.id}`)
      }
    ]
  },
  {
    path: 'chef',
    element: <Cheflayout></Cheflayout>,

    children: [
      {
        path: ':id',
        element: <Privaterout> <Details></Details></Privaterout>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
