import React from 'react'
import {axios} from 'axios'


function Logger({msg, err, id, date}) {
  const urlBase = 'http://localhost:5000/log'

  const LoggerF = () => { 
    axios.post(urlBase, {
      msg: msg,
      err: err,
      id: id,
      date: date
    })
  }

  return LoggerF
}

export default Logger