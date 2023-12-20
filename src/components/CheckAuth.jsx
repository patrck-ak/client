import axios from "axios";

async function CheckAuth() {

  const baseUrl = 'http://localhost:5000/validation'

  const token = sessionStorage.getItem("access-token");
  const userID = sessionStorage.getItem("access-uid");

  axios
  .post(baseUrl, 
  { tk: token, id: userID}
  )
  .then((response) => {
    if(response === false) {
      window.location.href = '/'
      console.log(response)
    } else {
      console.log(response)
    }
  }) 
  .catch((err) => {
    console.log(err);
  });

}

export default CheckAuth;
