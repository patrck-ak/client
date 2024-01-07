import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FaBell } from 'react-icons/fa';

function Notification({msg, title}) {
  return ( (msg === ' ' ? <></> : (
    <div
      className="toast-absolute"
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1, marginTop: "2em" }}>
        <Toast className="bg-dark text-bg-dark">
          <Toast.Header closeButton={false} className="bg-dark text-bg-dark">
            <strong className="me-auto "><FaBell className="mb-1" /> - {title}</strong>
          </Toast.Header>
          <Toast.Body>  {msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )))
}

export default Notification;