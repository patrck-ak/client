/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { InputMask } from "@react-input/mask";

function EditPacient() {
  const urlBase = "http://localhost:5000";
  const medicid = localStorage.getItem("access-uid");
  const medictoken = localStorage.getItem("access-token");
  var [data, setData] = useState([]);

  const notFound = [
    {
      data: {
        name: "Usuário não existe",
      },
    },
  ];

  let { id } = useParams();

  async function getPacient() {
    axios
      .post(`${urlBase}/getpacient`, {
        id: id,
        medicid: medicid,
        medictoken: medictoken,
      })
      .then((res) => {
        switch (res.data.status) {
          case 5:
            setData(notFound);
            break;
          case 10:
            setData(res.data.pacient);
            break;
          default:
            setData(notFound);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getPacient();
  }, []);

  return (
    <>
      <Nav />
      <form
        style={{
          padding: "2em",
          borderRadius: "15px",
          width: "70%",
          marginInline: "auto",
          position: "relative",
          top: "5em",
        }}
        className="bg-dark"
      >
        <h3 className="text-bg-dark pb-3" style={{ fontWeight: "bold" }}>
          - {data.name} -
        </h3>
        <div className="input-group mb-2 ">
          <span className="input-group-text" id="basic-addon1">
            <FaUser />
          </span>
          <input
            type="text"
            defaultValue={data.name}
            className="form-control"
          />
        </div>
        <div className="input-group mb-2 ">
          <span className="input-group-text" id="basic-addon1">
            <FaUser />
          </span>
          <input
            type="text"
            defaultValue={data.email}
            className="form-control"
          />
        </div>
        <div className="input-group mb-2 ">
          <span className="input-group-text" id="basic-addon1">
            <FaUser />
          </span>
          <InputMask
            defaultValue={data.cpf}
            mask={"___.___.___-__"}
            replacement={"_"}
            type="text"
            className="form-control"
          />
        </div>
        <div className="input-group mb-2 ">
          <span className="input-group-text" id="basic-addon1">
            <FaUser />
          </span>
          <input
            type="text"
            defaultValue={data.addr}
            className="form-control"
          />
        </div>
        <div className="input-group mb-2 ">
          <span className="input-group-text" id="basic-addon1">
            <FaUser />
          </span>
          <textarea
            rows={3}
            defaultValue={data.desc}
            className="form-control"
          />
        </div>
        <div className="button-group">
          <button className="btn btn-success">Atualizar cadastro</button>
        </div>
      </form>
    </>
  );
}

export default EditPacient;
