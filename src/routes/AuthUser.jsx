/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Style from "./css/AuthUser.module.css";
import Notification from "../components/Notification";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthUser() {
  const navigate = useNavigate();

  // verificação de sessão
  useEffect(() => {
    var data;
    const storage = sessionStorage.getItem("data");
    if (!storage) {
      console.log("nenhum dado encontrado...");
    } else {
      data = JSON.parse(storage);
      if (data.status) {
        console.log("valido");
        navigate("/dashboard");
      }
    }
  }, []);

  const [msg, setMsg] = useState(" ");
  const [type, setType] = useState(" ");
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState({
    userid: "",
    password: "",
  });

  const loadBtn = () => {
    setLoad(false);
    setTimeout(() => {
      setLoad(true);
    }, 1200);
  };

  const defNotif = (msgres, type) => {
    setMsg(msgres);
    setType(type);
    setTimeout(() => {
      setMsg(" ");
      setType(" ");
    }, 1200);
  };

  const authUser = (e) => {
    e.preventDefault();
    loadBtn();
    //* request na api
    try {
      axios
        .post("https://api-connectmed.onrender.com/auth/user", {
          name: user.userid,
          pass: user.password,
        })
        .then((response) => {
          let res = response.data;
          //* verifica se foi logado
          switch (res.status) {
            case 5:
              defNotif(res.msg, res.type);
              break;
            case 10:
              //* recupera dados da api e salva no sessionStorage do navegador.
              const data = {
                token: res.token,
                id: res.id,
                name: res.name,
                status: res.auth,
              };

              const s = JSON.stringify(data);
              sessionStorage.setItem("data", s);
              //* redireciona para home do app
              navigate("/dashboard");
              break;

            default:
              console.log("erro interno.");
          }
        })
        .catch((err) => {
          //TODO sistema de log (ip, geolocation e horario.)
          console.log(err);
        });
    } catch (err) {
      console.log("erro " + err);
    }
  };

  return (
    <div>
      <Notification msg={msg} type={type} />

      <Link to={"/"}>
        <button
          className="btn btn-dark"
          style={{ position: "absolute", left: "20px", top: "20px" }}
        >
          <FaArrowLeft />
        </button>
      </Link>

      <div className={Style.wrapForm}>
        <form className={Style.formContainer}>
          <img
            src="https://i.imgur.com/OPml1m4.png"
            alt="logo"
            className={Style.logoImg}
          />
          <br />
          <div className="input-group m-auto mb-1 mt-4 w-75">
            <span className="input-group-text text-center" id="basic-addon1">
              <FaUser />
            </span>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, userid: e.target.value })}
              className="form-control"
              name="userID"
              placeholder="ID"
              id="userID"
            />
          </div>
          <br />

          <div className="input-group m-auto mb-2 w-75">
            <span className="input-group-text text-center" id="basic-addon1">
              <FaLock />
            </span>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
              name="pass"
              placeholder="Senha"
              id="pass"
            />
          </div>

          <br />

          <button onClick={authUser} className="btn btn-light" type="submit">
            <span
              className="spinner-border spinner-border-sm"
              style={{ marginRight: "5px" }}
              hidden={load}
            ></span>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthUser;
