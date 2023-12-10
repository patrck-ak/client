/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {createBrowserRouter, RouteProvider, Route} from 'react-router-dom'
import Auth from './components/Auth'
import WebApp from './components/WebApp'
import Home from './routes/Home'
import NewUser from './routes/NewUser'


export default function App() {

  const router = createBrowserRouter([{
    element: <App />,
    children: [
      {
        path: "/",
      },
      {
        path: "/new",
      },
    ],
  },
])

  return (
    <div className='App'>
      <Auth />
    </div>
     
  )
}