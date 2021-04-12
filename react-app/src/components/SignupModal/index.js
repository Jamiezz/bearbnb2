import React from "react";
import Modal from "react-modal";
import SignUpForm from "../auth/SignUpForm";

Modal.setAppElement(document.getElementById("root"));

const SignupModal = ({ authenticated, setAuthenticated, isOpen, handleClose }) => {



  return (
    <>
      <Modal
        isOpen={isOpen}
        closeTimeoutMS={200}
       onRequestClose={handleClose}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <SignUpForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <button onClick={handleClose}></button>
      </Modal>
    </>
  );
};

export default SignupModal;
