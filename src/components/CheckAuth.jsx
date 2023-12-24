/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";

 const CheckAuth = async () => {
  var baseUrl = 'https://api-connectmed.onrender.com/validation';

  const token = localStorage.getItem("access-token");
  const userID = localStorage.getItem("access-uid")

  useEffect(() => {
  axios
  .post(baseUrl, 
  { tk: token, id: userID})
  .then((res) => {
    var x = res.data
    if(x.stts === false) {
      return (
        console.error('token não validado'),
        window.location.href = '/'
      )
    } else {
      return console.log('token validado.')
    }
  }) 
  .catch((err) => {
    console.log(err);
  });
}, [])}

export default CheckAuth;
