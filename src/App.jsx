/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Auth from './components/Auth'
import { Outlet } from 'react-router-dom'



export default function App() {


  return (
    <div className='App'>
      <div className="container">
        <Outlet />
      </div>
    </div>
     
  )
}