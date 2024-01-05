import {axios} from 'axios'


function Logger({msg, err, id, date}) {
  const urlBase = 'https://api-connectmed.onrender.com/log/medic'

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