/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListPacients() {
  const [users, setUsers] = useState([])
  const getUsers = async() => {
    try {
      const response = await axios.get("http://localhost:5000/list/users")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>ListPacients
      <p></p>
    </div>
  )
}

export default ListPacients