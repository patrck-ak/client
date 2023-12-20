import React from 'react'
import Style from './css/InfoBox.module.css'
import { FaExclamation } from 'react-icons/fa'


function InfoBox({msg}) {
  return  ( 
    (msg === ' ') ? (<></>) : (
    <>
    <div className={Style.box}><p className= {Style.parag}> <FaExclamation/> {msg}</p></div>
    </>
  )
  )}

export default InfoBox