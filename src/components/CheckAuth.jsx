
function CheckAuth() {

  const token = sessionStorage.getItem("access-token");

  return token
}

export default CheckAuth;
