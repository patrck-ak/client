import React from 'react'
import Style from './Navbar.module.css'
import { FaHome, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
    <ul className={Style.navlist}>
      <img src="https://i.imgur.com/OPml1m4.png" alt="logo" className={Style.logo}/>
      <div className='wrap'>
      <ul className={Style.navlistin}>
      <li className={Style.navitem}> <Link to={'/'}> <FaHome/> Inicio</Link> </li>
      <li className={Style.navitem}> <Link to={'/new'}> <FaUserPlus/> Novo Paciente</Link> </li>
      </ul>
      </div>
    </ul>
    </>
  )
}

export default Navbar