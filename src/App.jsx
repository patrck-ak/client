import { Outlet } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar'


export default function App() {


  return (
    <div className='App'>
      {/* <Navbar />  */}
      <div className="container">
        <Outlet />
      </div>
    </div>
     
  )
}