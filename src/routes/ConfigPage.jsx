import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
// import { Data } from "../storage/data";

function ConfigPage() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios.post("https://api-connectmed.onrender.com/user/edit").then((res) => {
      setUserData(res.data);
      console.log(userData);
    });
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

export default ConfigPage;
