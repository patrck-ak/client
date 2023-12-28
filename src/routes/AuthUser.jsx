import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import Notification from "../components/Notification";
import { FaLock, FaUser } from "react-icons/fa";

function AuthUser() {
  var auth = sessionStorage.getItem("auth");
  if (auth === "true") {
    window.location.href = "/dashboard";
  } 

  const urlBase = "https://api-connectmed.onrender.com/auth/user";

  var [load, setLoad] = useState(true)
  const [nameInput, setName] = useState();
  const [passInput, setPass] = useState(); 
  var [erro, setErro] = useState(" ");
  var data;

  function loadBtn() {
    setLoad(false)
    setTimeout(() => {
      setLoad(true)
    }, 10000);
  }


  const authUser = (e) => {
    loadBtn()
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
              localStorage.setItem("access-token", data.token);
              localStorage.setItem("access-uid", data.id);
              localStorage.setItem("name", data.name);
              localStorage.setItem("level", data.level);
              localStorage.setItem("auth", true);

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
            <span className="spinner-border spinner-border-sm" style={{marginRight: '5px'}} hidden={load}></span>Entrar
            </button>
            <small>first load may be a little slow</small>
        </form>
      </div>
    </div>
  );
}

export default AuthUser;
