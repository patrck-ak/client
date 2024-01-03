/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function EditUser() {
  const urlBase = "http://localhost:5000/user/edit";
  const name = localStorage.getItem("name");
  var res;

  console.log(name);
  useEffect(() => {
    axios
      .get(urlBase, { name: name })
      .then((r) => {
        res = r.data;
        console.log(res.data, name);
      })
      .catch((erro) => console.log(erro));
  });

  return (
    <>
      <Nav />
      
    </>
  );
}

export default EditUser;
