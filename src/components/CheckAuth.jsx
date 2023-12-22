import axios from "axios";
import { useState } from "react";



 const CheckAuth = () => {

  const [response, setResponse] = useState()

  var baseUrl = 'http://localhost:5000/validation';

  const token = sessionStorage.getItem("access-token");
  const userID = sessionStorage.getItem("access-uid")

  axios
  .post(baseUrl, 
  { tk: token, id: userID})
  .then(async (res) => {
    setResponse(res.data)
  }) 
  .catch((err) => {
    console.log(err);
  });
  return response
}

export default CheckAuth;
