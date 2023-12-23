/* eslint-disable no-unused-vars */
import axios from "axios";
import Nav from "../components/Nav";
import { useState } from "react";
import "./css/NewPacient.module.css";
import Style from "./css/NewPacient.module.css";
import CheckAuth from "../components/CheckAuth";
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
  CheckAuth();

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  console.log(today);

  var nameAdmin = sessionStorage.getItem("name");

  // dados medico
  const [pass, setPass] = useState();

  // dados do paciente
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [desc, setDesc] = useState();
  var [erro, setErro] = useState(" ");
  var [cpf, setCpf] = useState(0);
  var urlBase = "https://api-connectmed.onrender.com/pacients/create";

  function createPacient(e) {
    e.preventDefault()
    axios
    .post(urlBase, {
      data: { 
        name: name, 
        email: email, 
        address: address,
        desc: desc,
        cpf: cpf,
        pass: pass,
        admin: nameAdmin,
        date: today 
      },
    })
    .then()
    .catch();
  }



  function defErro(msg) {
    setErro(msg);
    setTimeout(() => {
      setErro(" ");
    }, 6000);
  }

  return (
    <div className={Style.bodyContainer}>
      <Nav />
      <Notification msg={erro} />
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
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaIdCard />
            </span>
            <input
              type="number"
              onChange={(e) => setCpf(e.target.value)}
              className="form-control"
              placeholder="CPF (sem pontuação)"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <FaAddressBook />
            </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Endereço"
            />
          </div>
          <div className="form-group text-bg-dark mt-3">
            <label htmlFor="desc">Descrição do atendimento</label>
            <textarea
              className="form-control mt-1"
              id="desc"
              rows="6"
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
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Senha Médico"
            />
          </div>
          <div className={Style.buttonContainer}>

            <button 
            type="submit" 
            className="btn btn-success mt-5"
            onChange={createPacient}>
              Enviar Prontuário
            </button>

            <button
              type="reset"
              className="btn btn-danger mt-5"
              style={{ marginLeft: "20px" }}>
              <FaTrash style={{ marginRight: "5px", marginBottom: "3px" }} />
              Apagar dados
            </button>
            {/* <input type="button" onClick={defErro} value={"teste"} /> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPacient;
