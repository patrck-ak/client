import Style from './css/Nav.module.css'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaUserCircle, FaUserCog, FaUserMd, FaUserPlus } from 'react-icons/fa'
import CheckAuth from './CheckAuth'

function Nav() {
  CheckAuth()
    
  var n = localStorage.getItem('name')
  var name;

  // Deixar a primeira letra do nome em Uppercase
  if(n !== null) {
    name = n.charAt(0).toUpperCase() + n.slice(1);
  }
  
  function LogOut() {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <>
      <div className={Style.Wrap}>
      <ul className={Style.NavList}>
        <li className={Style.LinkCont}>
          <Link className={Style.Link} to='/dashboard'> <FaHome className='mb-1' /> Dashboard </Link>
          <Link className={Style.Link} to='/pacients/consult'> <FaUserMd className='mb-1' /> Nova Consulta </Link>
          <Link className={Style.Link} to='/pacients/new'> <FaUserPlus className='mb-1' /> Novo Paciente </Link>
          <Link className={Style.Link} to='/user/register'> <FaUserCog className='mb-1' /> Novo Usuário </Link>
        </li>

        <li className={Style.SearchCont}>
          <div className="input-group" >
            <input type="text" className="form-control" placeholder="Procurar paciente"/>
              <button className="btn btn-light" type="button"> <FaSearch/> </button>
          </div>
        </li> 

        <li className={Style.UserCont}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            <FaUserCircle className='mb-1' /> {name}
          </button>

          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <Link className="dropdown-item"  to={'/user/edit/'}> Editar usuário </Link>
            <hr className='dropdown-divider' />
            <Link className="dropdown-item" to='#' onClick={LogOut}> Finaliza Sessão</Link>
          </ul>
        </li>
      </ul>
      </div>
    </>
  );
}

export default Nav;