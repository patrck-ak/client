/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function EditUser() {
  const urlBase = "http://localhost:5000/user/edit";
  const uid = localStorage.getItem("access-uid");

  var [res, setRes] = useState();

  useEffect(() => {
    axios
    .get(urlBase, {
      uid: uid,
    })
    .then((response) => {
      setRes(response)
      console.log(res, uid)
    })
    .catch(() => console.log('Erro interno'));

  }, [])


  return (
    <>
      <Nav />

    </>
  );
}

export default EditUser;
