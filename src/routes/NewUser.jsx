/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Style from './css/NewUser.module.css'
import 'bootstrap'

function NewUser() {

  const [userID, setUserID] = useState()
  const [pass, setPass] = useState()
  const [confirm, setConfirm] = useState()
  const [level, setLevel] = useState()

  return (
    <>
      <form className={Style.form}> 
      <input type="text" name="id" onChange={(e) => setUserID(e.target.value)} id="id" placeholder="ID" required/>
      <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} id="pass" placeholder="Senha" required/>
      <input type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)} id="confirm" placeholder="Senha" required/>
      <input type="number"  onChange={(e) => setLevel(e.target.value)} name="level" id="level" maxLength={1} />

      <button type="submit">Cadastrar</button>

      </form>
    </>
  )
}

export default NewUser