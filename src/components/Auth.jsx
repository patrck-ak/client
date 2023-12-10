import { useState } from 'react'
import Style from './Auth.module.css'

export default function Auth() {
  function regUser(e) {
    e.preventDefault()
    console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <form className={Style.form}>
        <h2>Validação</h2> 
        <input type="text" onChange={(e) => setName(e.target.value)} className={Style.input} placeholder='ID' name="user" id="user" /><br />

        <input type="password" onChange={(e) => setPassword(e.target.value)} className={Style.input} placeholder='Senha' name="pass" id="pass" /> <br />
        <input type="submit" className={Style.btn} onClick={regUser} value="Enviar" />
      </form>
    </>
  )
}