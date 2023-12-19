import axios from "axios";

async function CheckAuth() {
  sessionStorage.setItem('access-ID', '656d38c50c64b4aaf2bae794')
  sessionStorage.setItem('access-token', 'token123456')

  const token = sessionStorage.getItem("access-token");
  const userID = sessionStorage.getItem("access-ID");

  axios
  .post('http://localhost:5000/validation', 
  { tk: token, id: userID})
  .then((response) => {
    if (response.data === true) {
      return true
    } else {
      return false
    }
  })
  .catch((err) => {
    console.log(err);
  });

}

export default CheckAuth;
