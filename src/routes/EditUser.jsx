/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import Style from './css/EditUser.module.css'

function EditUser() {
  const urlBase = "https://api-connectmed.onrender.com/user/edit/";
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("access-uid");
  const token = localStorage.getItem("access-token");
  var res;

  const getUser = () => {
    axios.post(urlBase, {
        nam: name, 
        id: id, 
        token: token
      })
    .then(async (response) => {
      res = response.data;
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <>
      <Nav />
      <div className={Style.formContainer}></div>
      <form className={Style.form}>
      <p>{res}</p>
      </form>
    </>
  );
}

export default EditUser;
