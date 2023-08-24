import React, { useState } from "react";
import "./FAQ.css";
import Tilt from "react-parallax-tilt";
import questions from "./questions";
import ProfileCard from "./profileCard";
import SingleQuestion from "./SingleQuestion";
import Modal from "../components/modal/Modal";

//chat icon
import { BsFillChatDotsFill } from "react-icons/bs";

const FAQ = () => {
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  const showQuestionPopUp = () => {
    setShowQuestionModal(true);
  };

  
  return (
    <>
      {showQuestionModal && <Modal localstate={setShowQuestionModal} />}
      <div className="main">
        <div className="grid">
          <div className="grid1">
            <Tilt tiltMaxAngleX={12.5} tiltMaxAngleY={12.5}>
              <ProfileCard />
            </Tilt>
          </div>
          <div className="grid2">
            {questions.map((que) => {
              return <SingleQuestion key={que.id} {...que} />;
            })}
          </div>
        </div>
        <BsFillChatDotsFill className="chat-icon" onClick={showQuestionPopUp} />
      </div>
    </>
  );
};

export default FAQ;
