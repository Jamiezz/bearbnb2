import React from "react";
import Modal from "react-modal";
import LoginForm from "../auth/LoginForm";


Modal.setAppElement(document.getElementById("root"));

const LoginModal = ({ authenticated, setAuthenticated, isOpen, handleClose }) => {



  return (
    <>
      <Modal
        isOpen={isOpen}
        closeTimeoutMS={200}
        onRequestClose={handleClose}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        className="InnerModal"
      >
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <button onClick={handleClose}>Close</button>
      </Modal>
    </>
  );
};

export default LoginModal;
