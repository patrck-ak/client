import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import Notification from "../components/Notification";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";

function AuthUser() {
  const urlBase = "https://api-connectmed.onrender.com/auth/user";

  const [nameInput, setName] = useState();
  const [passInput, setPass] = useState();
  var [erro, setErro] = useState(" ");
  var data;

  var auth = sessionStorage.getItem("auth");
  if (auth === "true") {
    window.location.href = "/dashboard";
  } 

  const authUser = (e) => {
    e.preventDefault(); // cancela o envio padrão
    //* tenta enviar um post pelo axios
    try {
      axios
        .post(urlBase, { name: nameInput, pass: passInput })
        .then((res) => {
          data = res.data;

          //* verifica se foi logado
          switch (data.status) {
            case 1:
              setErro(data.err);
              break;
            case 2:
              setErro(data.err);
              break;
            case 3:
              setErro(data.err);
              break;
            case 4:
              setErro(data.err);
              break;
            case 5:
              //* recupera dados da api e salva no sessionStorage do navegador.
              sessionStorage.setItem("access-token", data.token);
              sessionStorage.setItem("access-uid", data.id);
              sessionStorage.setItem("name", data.name);
              sessionStorage.setItem("level", data.level);
              sessionStorage.setItem("auth", true);

              console.log(
                `usuário ${data.name} logado \n token: ${data.token} \nUserID: ${data.id}`
              );
              //* redireciona para home do app
              window.location.href = "/dashboard";
              break;

            default:
              console.log("erro interno.");
          }
        })
        .catch((err) => {
          //! envia um post de log de erro
          console.log(err);
        });
    } catch (err) {
      console.log("erro " + err);
    }
  };

  return (
    <div>
      <Notification msg={erro} />

      <div className={Style.wrapForm}>
        <form className={Style.formContainer}>
          <img
            src="https://i.imgur.com/OPml1m4.png"
            alt="logo"
            className={Style.logoImg}
          />
          <br />
            <div className="input-group m-auto mb-1 mt-4 w-75">
              <span className="input-group-text text-center" id="basic-addon1">
                <FaUser />
              </span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                name="userID"
                placeholder="ID"
                id="userID"
              />
            </div>
            <br />

            <div className="input-group m-auto mb-2 w-75">
              <span className="input-group-text text-center" id="basic-addon1">
                <FaLock />
              </span>
              <input
                type="password"
                onChange={(e) => setPass(e.target.value)}
                className="form-control"
                name="pass"
                placeholder="Senha"
                id="pass"
              />
            </div>

            <br />

            <button onClick={authUser} className="btn btn-light" type="submit">
              <FaLockOpen className="mb-1" /> Entrar
            </button>
        </form>
      </div>
    </div>
  );
}

export default AuthUser;
