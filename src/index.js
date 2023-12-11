/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteProvider, Route, RouterProvider} from 'react-router-dom'
import Home from './routes/Home'
import NewUser from './routes/NewUser';
import ListPacients from './routes/ListPacients';



const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <NewUser />,
    },
    {
      path: "/list",
      element: <ListPacients />,
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

reportWebVitals();
