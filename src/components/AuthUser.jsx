import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import InfoBox from "./InfoBox";

function AuthUser() {
  const urlBase = "http://localhost:5000/auth/user";

  const [nameInput, setName] = useState();
  const [passInput, setPass] = useState();
  const [data, setData] = useState();

  // variavel para utilização do infobox
  var erroMsg = " ";

  const authUser = async (e) => {
    e.preventDefault(); // cancela o envio padrão
    //* tenta enviar um post pelo axios
    try {
      axios
        .post(urlBase, { name: nameInput, pass: passInput })
        .then((res) => {
          setData(res.data);

          //! verifica se retornou uma mensagem de erro.
          if (data.erroMsg) {
            console.log(data.erroMsg)

          //* verifica se foi logado
          if (data.msg === "logado") {
            console.log(data.msg);
          }
          }
        })
        .catch((err) => {
          //! envia um post de log de erro
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={Style.wrap}>
        <form className={Style.formContainer}>
          <img
            src="https://i.imgur.com/OPml1m4.png"
            alt="logo"
            className={Style.logoImg}
          />
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className={Style.inputUser}
            name="userID"
            placeholder="ID"
            id="userID"
          />
          <br />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className={Style.inputPass}
            name="pass"
            placeholder="Senha"
            id="pass"
          />
          <br />
          <button onClick={authUser} className={Style.btn} type="submit">
            {" "}
            Entrar{" "}
          </button>
        </form>
        <InfoBox msg={erroMsg} />
      </div>
    </div>
  );
}

export default AuthUser;
