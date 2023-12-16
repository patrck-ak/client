/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Style from "./css/NewUser.module.css";
import CheckAuth from "../components/CheckAuth";
import axios from "axios";
import { FaLock, FaUser } from "react-icons/fa";

function NewUser() {
  const [userID, setUserID] = useState();
  const [pass, setPass] = useState();
  const [confirm, setConfirm] = useState();
  const [level, setLevel] = useState();
  const [res, setRes] = useState();

  const urlBase = "http://localhost:5000/user/new/admin";
  const regUser = (e) => {
    if (pass === confirm) {
      e.preventDefault();

      axios
        .post(urlBase, { userID: userID, pass: pass })
        .then((res) => {
          setRes(res.data);
        }) //! finalizar sistema de envio de log
        .catch((err) => {
          console.log(err);
        });
    } else {
      //! finalizar sistema de infobox
      console.log("senhas não batem");
    }
  };

  return (
    <>
      <form className={Style.form}>
      
      <div className={Style.wrap}>

      <div class="input-group mb-2 mt-4">
        <span class="input-group-text" id="basic-addon1"><FaUser /></span>
        <input type="text" onChange={(e) => setUserID(e.target.value)} class="form-control" placeholder="Username ID" />
      </div>

      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1"><FaLock /></span>
        <input type="text" onChange={(e) => setPass(e.target.value)} class="form-control" placeholder="Password" />
      </div>

      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1"><FaLock /></span>
        <input type="text" onChange={(e) => setConfirm(e.target.value)} class="form-control" placeholder="Confirm Password" />
      </div>

      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1"><FaLock /></span>
        <input type="text" onChange={(e) => setConfirm(e.target.value)} class="form-control" placeholder="Confirm Password" />
      </div>

      <div class="input-group mb-2  text-light">
        <label htmlFor="">Nível de permissão - {level}</label>
        <input type="range" min={0} max={2} step={1} onChange={(e) => setConfirm(e.target.value)} class="form-range" placeholder="Confirm Password" />
      </div>


        <input
          type="range"
          min={0}
          max={2}
          step={1}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
          id="level"
          maxLength={1}
        />

        <button type="submit" onClick={(e) => regUser(e)}>
          Cadastrar
        </button>
        </div> {/** fechamento wrapper  */ } 
      </form>
    </>
  );
}

export default NewUser;
