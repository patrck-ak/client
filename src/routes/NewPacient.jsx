/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Style from "./css/NewUser.module.css";
import axios from 'axios';

function NewUser() {
  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/newpacient"
      )
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [addr, setAddr] = useState();
  // const [passwordAdmin, setPasswordAdmin] = useState();

  return (
    <>
      <section className={Style.pageSection}>
        <form className={Style.form}>
          <h3>Novo Paciente</h3>
          <input
            type="text"
            // onChange={(e) => setName(e.target.value)}
            className={Style.input}
            placeholder="Nome Completo"
            name="userName"
            id="userName"
          />
          <input
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            className={Style.input}
            placeholder="Email"
            name="mail"
            id="mail"
          />
          <input
            type="text"
            // onChange={(e) => setAddr(e.target.value)}
            className={Style.input}
            placeholder="Endereço"
            name="addr"
            id="addr"
          />
          <input
            type="password"
            // onChange={(e) => setPasswordAdmin(e.target.value)}
            className={Style.input}
            placeholder="Senha de Admin"
            name="passAdm"
            id="passAdm"
          />
          <br />
          <input
            type="submit"
            className={Style.btn}
            value="Enviar"
          />
        </form>

      </section>
    </>
  );
}

export default NewUser;
