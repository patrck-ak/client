import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import Notification from "../components/Notification";
import { FaLock, FaUser } from "react-icons/fa";

function AuthUser() {
  var auth = localStorage.getItem("auth");
  if (auth === "true") {
    window.location.href = "/dashboard";
  } 

  const urlBase = "http://localhost:5000/auth/user";

  var [msg, setMsg] = useState(" ");
  var [title, setTitle] = useState(" ");
  var [load, setLoad] = useState(true)
  const [nameInput, setName] = useState();
  const [passInput, setPass] = useState(); 
  var res;

  function loadBtn() {
    setLoad(false)
    setTimeout(() => {
      setLoad(true)
    }, 2000);
  }

  function defNotif(msgres, title) {
    setMsg(msgres);
    setTitle(title);
    setTimeout(() => {
      setMsg(" ");
      setTitle(" ");
    }, 3000);
  }

  const authUser = (e) => {
    e.preventDefault(); // cancela o envio padrão
    loadBtn()
    
    //* tenta enviar um post pelo axios
    try {
      axios
        .post(urlBase, { name: nameInput, pass: passInput })
        .then((response) => {
          res = response.data;

          //* verifica se foi logado
          switch (res.status) {
            case 5:
              defNotif(res.msg, res.title);
              break;

            case 10:
              //* recupera dados da api e salva no sessionStorage do navegador.
              localStorage.setItem("access-token", res.token);
              localStorage.setItem("access-uid", res.id);
              localStorage.setItem("name", res.name);
              localStorage.setItem("level", res.level);
              localStorage.setItem("auth", res.auth);

              console.log(
                `usuário ${res.name} logado \n token: ${res.token} \nUserID: ${res.id}`
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
      <Notification msg={msg} title={title}/>

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
        </form>
      </div>
    </div>
  );
}

export default AuthUser;
