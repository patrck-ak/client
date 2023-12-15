import React from 'react'

function NewUser() {
  return (
    <>
      <form>
      <input type="text" name="id" id="id" placeholder="ID" required/>
      <input type="password" name="pass" id="pass" placeholder="Senha" required/>
      <input type="password" name="confirm" id="confirm" placeholder="Senha" required/>
      <input type="number" name="level" id="level" />


      </form>
    </>
  )
}

export default NewUser