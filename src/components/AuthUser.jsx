import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import InfoBox from "./InfoBox";

function AuthUser() {
  const urlBase = "http://localhost:5000/auth/user";

  const [nameInput, setName] = useState();
  const [passInput, setPass] = useState();
  const [data, setData] = useState([]);
  const [erro, setErro] = useState(" ");

  const authUser = async (e) => {
    e.preventDefault(); // cancela o envio padrão
    //* tenta enviar um post pelo axios
    try {
      axios
        .post(urlBase, { name: nameInput, pass: passInput })
        .then(async (res) => {
          setData(res.data);

          //* verifica se foi logado
          switch (data.status) {
            case 1:
              await setErro(data.err);
              break;
            case 2:
              await setErro(data.err);
              break;
            case 3:
              await setErro(data.err);
              break;
            case 4:
              await setErro(data.err);
              break;
            case 5:
              //* recupera dados da api e salva no sessionStorage do navegador.
              sessionStorage.setItem('access-token', data.token) 
              sessionStorage.setItem('access-uid', data.id)  
              console.log(`usuário ${data.name} logado \n token: ${data.token} \nUserID: ${data.id}` )
              //* redireciona para home do app
              window.location.href = '/user/register'

              break;

            default:
              console.log("Erro Interno.");
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
            onKeyUp={(e) => setName(e.target.value)}
            className={Style.inputUser}
            name="userID"
            placeholder="ID"
            id="userID"
          />
          <br />
          <input
            type="password"
            onKeyUp={(e) => setPass(e.target.value)}
            className={Style.inputPass}
            name="pass"
            placeholder="Senha"
            id="pass"
          />
          <br />
          <button onClick={authUser} className={Style.btn} type="submit">
            Entrar
          </button>
        </form>
        <InfoBox msg={erro} />
      </div>
    </div>
  );
}

export default AuthUser;
