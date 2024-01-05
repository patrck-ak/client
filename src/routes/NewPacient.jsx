import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Style from "./css/NewPacient.module.css";
import "./css/NewPacient.module.css";
import { InputMask } from "@react-input/mask";

import {
  FaAddressBook,
  FaIdCard,
  FaLock,
  FaTrash,
  FaUser,
  FaUserCog,
} from "react-icons/fa";
import Notification from "../components/Notification";
import { MdEmail } from "react-icons/md";

function NewPacient() {

  var nameAdmin = localStorage.getItem("name");
  var idAdmin = localStorage.getItem("uid");

  //! PAREI AQUI FAZENDO O SISTEMA DE NOTIFICAÇÃO
  // variavel de erro
  var [msg, setMsg] = useState(" ");
  var [title, setTitle] = useState(" ");

  // dados medico
  const [pass, setPass] = useState("");

  // dados do paciente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  var [cpf, setCpf] = useState(0);
  var urlBase = "https://api-connectmed.onrender.com/pacients/create";
  var res;

  function defNotif(msgres, title) {
    setMsg(msgres);
    setTitle(title);
    setTimeout(() => {
      setMsg(" ");
      setTitle(" ");
    }, 6000);
  }

  function createPacient(e) {
    e.preventDefault();
    axios
      .post(urlBase, {
        nam: name,
        email: email,
        address: address,
        desc: desc,
        cpf: cpf,
        pass: pass,
        admin: nameAdmin,
        idadmin: idAdmin,
      })
      .then((response) => {
        res = response.data;
        console.log(res.status);
        switch (res.status) {
          case 5:
            defNotif(res.msg, res.title);
            break;
          case 10:
            defNotif(res.msg, res.title);
            break;
          default:
            defNotif('Erro interno, tente mais tarde.', 'ERRO')
            break;
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={Style.bodyContainer}>
      <Nav />
      <Notification msg={msg} title={title}/>
      <form className={Style.formContainer}>
        <div className={Style.Container}>
          <div className="input-group mb-2 mt-4">
            <span className="input-group-text" id="basic-addon1">
              <FaUser />
            </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Nome do Paciente"
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <MdEmail />
            </span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaIdCard />
            </span>
            <InputMask
              mask="___.___.___-__"
              replacement="_"
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              className="form-control"
              placeholder="CPF"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaAddressBook />
            </span>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Endereço"
            />
          </div>
          <div className="form-group text-bg-dark mt-3">
            <label htmlFor="desc">Descrição do paciente</label>
            <textarea
              className="form-control mt-1"
              id="desc"
              rows="6"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className={Style.Container}>
          <div className="input-group mb-2 mt-4">
            <span className="input-group-text" id="basic-addon1">
              <FaUserCog />
            </span>
            <input
              type="text"
              value={nameAdmin}
              disabled
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Usuário Médico"
            />
          </div>

          <div className="input-group mb-2 ">
            <span className="input-group-text" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="text"
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              placeholder="Senha Médico"
            />
          </div>
          <div className={Style.buttonContainer}>
            <button
              type="submit"
              className="btn btn-success mt-5"
              onClick={(e) => createPacient(e)}
            >
              Enviar Prontuário
            </button>

            <button
              type="reset"
              className="btn btn-danger mt-5"
              style={{ marginLeft: "20px" }}
            >
              <FaTrash style={{ marginRight: "5px", marginBottom: "3px" }} />
              Apagar dados
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPacient;
