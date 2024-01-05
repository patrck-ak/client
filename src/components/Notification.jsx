import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FaExclamation } from 'react-icons/fa';

function Notification({msg, title}) {
  return ( (msg === ' ' ? <></> : (
    <div
      className="toast-absolute"
    >
      <ToastContainer position="top-start" className="p-3" style={{ zIndex: 1, marginTop: "2em" }}>
        <Toast className="bg-light-subtle text-bg-light">
          <Toast.Header className="bg-light text-bg-light">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto ">{title}</strong>
          </Toast.Header>
          <Toast.Body> <FaExclamation className="mb-1" /> {msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )))
}

export default Notification;