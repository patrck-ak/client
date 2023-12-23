import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FaExclamation } from 'react-icons/fa';

function Notification({msg}) {
  return ( (msg === ' ' ? <></> : (
    <div
      className="toast-absolute"
    >
      <ToastContainer position="top-start" className="p-3" style={{ zIndex: 1, marginTop: "2em" }}>
        <Toast className="bg-dark-subtle text-bg-darker">
          <Toast.Header className="bg-dark text-bg-dark">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto ">ERRO</strong>
          </Toast.Header>
          <Toast.Body> <FaExclamation className="mb-1" /> {msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )))
}

export default Notification;