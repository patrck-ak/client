/* eslint-disable no-unused-vars */
import axios from "axios";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import Style from "./css/NewPacient.module.css";
import CheckAuth from "../components/CheckAuth";
import InputMask from 'react-input-mask';
import { FaAddressBook, FaIdCard, FaUser } from "react-icons/fa";

function NewPacient() {
  CheckAuth();

  const [name, setName] = useState();
  const [user, setUser] = useState();
  var [cpf, setCpf] = useState(0);

  return (
    <>
      <Nav />
      <form className={Style.Container}>
        <div className="input-group">
        <div className="input-group mb-2 mt-4 w-50">
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
        <div className="input-group mb-2 mt-4 w-50">
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
        </div>

        <div className="input-group mb-2">
          <span className="input-group-text" id="basic-addon1">
            <FaIdCard />
          </span>
          <input
            type="number"
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
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Endereço"
          />
        </div>

      </form>
    </>
  );
}

export default NewPacient;
