/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function EditUser() {
  const urlBase = "http://localhost:5000/user/edit/";
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("access-uid");
  const token = localStorage.getItem("access-token");
  var res;

  const getUser = () => {
    axios
    .post(urlBase, {
      data: { 
        nam: name, 
        id: id, 
        token: token,
        // date: today 
},})
    .then(async (response) => {
      res = response.data
    })
    .catch((err) => console.log(err));
  }

  console.log(name);
  console.log(res);
  useEffect(() => {
    getUser()
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

export default EditUser;
