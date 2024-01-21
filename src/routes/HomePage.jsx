/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Style from "./css/HomePage.module.css";
import { FaUser, FaUserMd } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import Notification from "../components/Notification";
import axios from "axios";

function HomePage() {
  //! precisa refatorar
  const storage = sessionStorage.getItem("data");
  const data = JSON.parse(storage);

  const urlBase = "https://api-connectmed.onrender.com";
  if (data.status === "true") {
    window.location.href = "/dashboard";
  }

  var res;
  var [cpf, setCpf] = useState();
  var [msg, setMsg] = useState(" ");
  var [type, setType] = useState(" ");

  function defNotif(msgres, type) {
    setMsg(msgres);
    setType(type);
    setTimeout(() => {
      setMsg(" ");
      setType(" ");
    }, 1200);
  }

  function CheckCpf(e) {
    e.preventDefault();
    axios
      .post(`${urlBase}/checkcpf`, {
        cpf: cpf,
      })
      .then((response) => {
        res = response.data;
        switch (res.status) {
          case 5:
            defNotif(res.msg, res.type);
            break;
          case 10:
            defNotif(res.msg, res.type);
            break;
          default:
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Notification msg={msg} type={type} />
      <Link to={"/auth"}>
        <button
          className="btn btn-dark"
          title={"Painel do médico"}
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <FaUserMd />
        </button>
      </Link>

      <div className={Style.formContainer}>
        <form className={Style.form}>
          <h4 className="text-light">Encontre suas consultas</h4>
          <div className="input-group mb-3 mt-4">
            <span className="input-group-text">
              <FaUser />
            </span>
            <InputMask
              onChange={(e) => setCpf(e.target.value)}
              mask="___.___.___-__"
              replacement="_"
              type="text"
              className="form-control"
              placeholder="CPF"
            />
            <button className="btn btn-light" onClick={(e) => CheckCpf(e)}>
              <FaMagnifyingGlass />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomePage;
