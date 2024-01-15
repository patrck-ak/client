/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import Pop from "../components/Pop";
import Notification from "../components/Notification";

const MedicPanel = () => {
  const medicid = localStorage.getItem("access-uid");
  const token = localStorage.getItem("access-token");
  const urlBase = "https://api-connectmed.onrender.com";
  const nav = useNavigate();

  var [msg, setMsg] = useState(" ");
  var [type, setType] = useState(" ");
  var [state, setState] = useState(false);
  var [data, setData] = useState(undefined);
  var [pacientID, setPacientID] = useState();

  function defNotif(msgres, type) {
    setMsg(msgres);
    setType(type);
    setTimeout(() => {
      setMsg(" ");
      setType(" ");
    }, 1200);
  }

  function deletePacient() {
    closeModal();
    axios
      .post(`${urlBase}/pacients/edit/delete`, {
        id: pacientID,
        medicid: medicid,
        token: token,
      })
      .then((response) => {
        let res = response.data;
        switch (res.status) {
          case 5:
            defNotif(res.msg, res.type);
            break;
          case 10:
            List();
            defNotif(res.msg, res.type);
            break;
          default:
            defNotif("Erro interno");
            break;
        }
      })
      .catch((err) => defNotif("Erro interno"));
  }

  //? função para fechar o modal
  function closeModal() {
    return setState(false);
  }

  //? abre modal de configuração
  function confirmDelete(name, id) {
    setState(true);
    setPacientID(id);
  }

  //? recupera todos os pacientes do banco
  function List() {
    axios
      .post(`${urlBase}/dashboard/listpacients`, {
        id: medicid,
        token: token,
      })
      .then(async (response) => {
        setData(response.data.pacients);
        switch (response.data.status) {
          case 5:
            defNotif(data.msg);
            break;
          case 10:
            defNotif("Pacientes atualizados.");
            break;
          default:
            defNotif("Erro interno, contate o suporte.");
        }
      })
      .catch((err) => defNotif("Erro ao enviar request."));
  }

  //? atualiza a lista a cada refresh da página
  useEffect(() => {
    List();
  }, []);

  return (
    <>
      <Nav />
      <Notification msg={msg} type={type} />
      <Pop
        show={state}
        defState={closeModal}
        pacientID={pacientID}
        deletePacient={deletePacient}
      />
      <div
        className="bg-dark"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5em",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <ul
          className="list-group"
          style={{ width: "80%", position: "inherit" }}
        >
          <li className="mt-1 list-group-item bg-dark border-dark">
            <div
              className="input-group d-flex justify-content-evenly bg-dark border-dark "
              style={{ marginTop: "-10px" }}
            >
              <p
                className="input-group-text bg-transparent border-0 text-bg-dark"
                style={{ marginLeft: "-5vw", marginBottom: "-15px" }}
              >
                NOME
              </p>
              <p
                className="input-group-text bg-transparent border-0 text-bg-dark"
                style={{ marginBottom: "-15px" }}
              >
                CPF
              </p>
              <p
                className="input-group-text bg-transparent border-0 text-bg-dark"
                style={{ marginBottom: "-15px" }}
              >
                ENDEREÇO
              </p>
              <p
                className="input-group-text bg-transparent border-0 text-bg-dark"
                style={{ marginBottom: "-15px" }}
              >
                DESCRIÇÃO
              </p>
            </div>
          </li>
          {data === undefined ? (
            <li className="list-group-item bg-dark border-dark">
              <div className="input-group m-auto">
                <input
                  type="text"
                  readOnly
                  className="form-control text-center "
                  value="CARREGANDO..."
                />
              </div>
            </li>
          ) : (
            data.map((pacient) => (
              <li
                className="list-group-item bg-dark border-dark"
                key={pacient.name}
              >
                <div className="input-group m-auto">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={pacient.name}
                  />
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={pacient.cpf}
                  />
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={pacient.addr}
                  />
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={pacient.desc}
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      confirmDelete(pacient.name, pacient._id);
                    }}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="btn btn-primary "
                    onClick={() => {
                      nav(`/pacient/edit/${pacient._id}`);
                    }}
                  >
                    <FaPencilAlt />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default MedicPanel;
