import React from 'react'
import Style from './css/InfoBoxStyle.css'

function InfoBox({msg}) {

  return (
    <>
    <span className={Style.container}>{msg}</span>
    </>
  )
}

export default InfoBox