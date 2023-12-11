import { useState } from "react";
import Style from "./css/NewUser.module.css";

function NewUser() {
  function regUser(e) {
    e.preventDefault();
    console.log(name, email, password);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <section className={Style.pageSection}>
        <form className={Style.form}>
          <h3>Novo Paciente</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className={Style.input}
            placeholder="Nome Completo"
            name="user"
            id="user"
          />
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className={Style.input}
            placeholder="Email"
            name="user"
            id="user"
          />
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={Style.input}
            placeholder="Senha"
            name="pass"
            id="pass"
          />
          <br />
          <input
            type="submit"
            className={Style.btn}
            onClick={regUser}
            value="Enviar"
          />
        </form>
      </section>
    </>
  );
}

export default NewUser;
