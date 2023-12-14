import React from "react";
import { useState } from "react";
import axios from "axios";
import Style from "./css/AuthUser.module.css";
import InfoBox from "./InfoBox";

function AuthUser() {
  const urlBase = "http://localhost:5000/auth/user";

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const authUser = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(urlBase, { name: name, pass: pass })
        .then((res) => {
          console.log(typeof res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  var err = ' '

  return (
    <div>
        <div className={Style.wrap}>
        <form className={Style.formContainer}>
          <img src="https://i.imgur.com/OPml1m4.png" alt="logo" className={Style.logoImg}/>
          <br />
          <input type="text" onChange={(e) => setName(e.target.value)} className={Style.inputUser} name="userID" placeholder="ID" id="userID" />
          <br />
          <input type="password" onChange={(e) => setPass(e.target.value)} className={Style.inputPass} name="pass" placeholder="Senha" id="pass" />
          <br />
          <button onClick={authUser} className={Style.btn} type="submit"> Entrar </button>
        </form>
        </div>
      <InfoBox msg={err} />
    </div>
  );
}

export default AuthUser;
