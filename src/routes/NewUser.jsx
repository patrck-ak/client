import axios from "axios";
import React, { useState } from "react";
import Style from "./css/NewUser.module.css";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CheckAuth from "../components/CheckAuth";
import Nav from "../components/Nav";
import Notification from "../components/Notification";

function NewUser() {
  CheckAuth();

  const adminLevel = localStorage.getItem('level');

  var [load, setLoad] = useState(true)

  function loadIco() {
    setLoad(false)
    setTimeout(() => {
      setLoad(true)
    }, 2000);
  }

  var erro = " ";
  var titulo = " ";
  var [level, setLevel] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirm, setConfirm] = useState();

  const urlBase = "https://api-connectmed.onrender.com/user/new/admin";

  const regUser = (e) => {
    e.preventDefault();
    loadIco()
    if (pass === confirm) {
      axios
        .post(urlBase, { name: name, email: email, pass: pass, level: level, adminLevel: adminLevel })
        .then(async (res) => {
          console.log(res);
        }) //! finalizar sistema de envio de log
        .catch((err) => {
          console.log(err);
        });
    } else {
      //* printa erro de senha não são identicas
      titulo = "ERRO";
      erro = "Senhas não são idênticas";
      setTimeout(() => {
        erro = " ";
      }, 2000);
    }
  };

  return (
    <>
      <Nav />
      <Notification msg={erro} tit={titulo}/>
      <div className={Style.wrap}>
        <form className="m-auto">
          <h4 className="text-light text-center">Registrar novo usuário</h4>

          <div className="input-group mb-2 mt-4">
            <span className="input-group-text" id="basic-addon1">
              <FaUser />
            </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Username ID"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <MdEmail />
            </span>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Valid Mail"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="password"
              onChange={(e) => setConfirm(e.target.value)}
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <hr className="mb-2 mt-4" />

          <div className="input-group mb-2  text-light">
            <label htmlFor="">Nível de permissão - {level}</label>
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              defaultValue={0}
              onChange={(e) => setLevel(e.target.value)}
              className="form-range"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => regUser(e)}>
            <span className="spinner-border spinner-border-sm" hidden={load}></span>  Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}

export default NewUser;
