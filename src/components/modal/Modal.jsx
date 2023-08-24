import React from "react";
import "./modal.css";
import { GrClose } from "react-icons/gr";

function Modal(props) {
  const hideQuestionPopUp = () => {
    props.localstate(false);
    console.log('loaded man');
  };
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-body">
          <GrClose className="close-icon" onClick={hideQuestionPopUp} />
          <div className="modal-heading">Add a Question & Answer</div>
          <input type="text" placeholder="Add a queston" />
          <textarea type="text" placeholder="Add answer of the question" />
          <button>Add</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
