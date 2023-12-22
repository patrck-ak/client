/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App';
import Home from './routes/Home'
import NewPacient from './routes/NewPacient';
import ListPacients from './routes/ListPacients';
import AuthUser from './components/AuthUser';
import NewUser from './routes/NewUser';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'



const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: "/", 
      element: <AuthUser />,
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/pacients/new",
      element: <NewPacient />,
    },
    {
      path: "/pacients/list",
      element: <ListPacients />,
    },
    {
      path: "/user/register",
      element: <NewUser />,
    },
  ],
},
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

