import Style from './css/Nav.module.css'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaUserCircle, FaUserCog } from 'react-icons/fa'
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
      <ul className={Style.NavList}>
        <li className={Style.NavItem}>
          <Link className={Style.Link} to='/dashboard'> <FaHome className='mb-1' /> Dashboard </Link>
        </li>
        <li className={Style.NavItem}>
          <Link className={Style.Link} to='/pacients/new'> <FaUser className='mb-1' /> Novo Paciente </Link>
        </li>
        <li className={Style.NavItem}>
          <Link className={Style.Link} to='/user/register'> <FaUserCog className='mb-1' /> Novo Usuário </Link>
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
    </>
  );
}

export default Nav;