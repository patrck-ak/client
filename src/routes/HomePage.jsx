/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Style from "./css/HomePage.module.css";
import { FaUser, FaUserMd, FaServer } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import Notification from "../components/Notification";
import axios from "axios";

function HomePage() {
  const urlBase = "http://localhost:5000";

  var res;
  var resStatus = false;
  var [status, setStatus] = useState("OFFLINE");
  var [cpf, setCpf] = useState();
  var [msg, setMsg] = useState(" ");
  var [title, setTitle] = useState(" ");

  function defNotif(msgres, title) {
    setMsg(msgres);
    setTitle(title);
    setTimeout(() => {
      setMsg(" ");
      setTitle(" ");
    }, 6000);
  }

  function awakeAPI() {
    axios
      .post(`${urlBase}/awake`, {
        awake: "awake",
      })
      .then((response) => {
        resStatus = response.data;
        switch (resStatus.msg) {
          case "true":
            setStatus("ONLINE");
            break;
          default:
            setStatus("INICIANDO...");
        }
      })
      .catch((err) => {
        console.log(err)
        setStatus("OFFLINE");
      });
  }

  useEffect(() => awakeAPI(), []);

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
            defNotif(res.msg, res.title);
            break;
          case 10:
            defNotif(res.msg, res.title);
            break;
          default:
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Notification msg={msg} title={title} />
      <Link to={"/auth"}>
        <button
          className="btn btn-dark"
          title={"Painel do médico"}
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <FaUserMd />
        </button>
      </Link>

      <div
        className="input-group"
        style={{ position: "absolute", top: "70px", left: "20px"}}
      >
        <input
          type="text"
          title="Status do backend"
          className="input-group-text"
          disabled
          value={status}
        />
        <button title="Iniciar" className="btn btn-dark" onClick={awakeAPI}>
          <FaServer />
        </button>
      </div>

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
