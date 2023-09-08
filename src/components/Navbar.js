import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Modal.css';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoChevronBack } from 'react-icons/io5';

const Navbar = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
/* eslint-disable */
/* disabled linters only for future feature (MICROPHONE) */
  return (
    <header className="flex justify-between p-6 items-center bg-blue-3 text-text-color">
      <NavLink className="lato text-text-color w-1/4" to="/">
        <div className="flex items-center gap-1">
          <IoChevronBack className="text-base" />
          <p>See all</p>
        </div>
      </NavLink>
      <h1 className="font-bold lato text-xl">React_Capstone-Crypto_Watcher</h1>
      <div className="flex gap-2 w-1/4 justify-end">
        <button onClick={toggleModal}>
          <FaMicrophone />
        </button>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div>
              <p className='mic'>
                Microphone 🎙 : 
                {listening ? ' On' : ' Off'}
              </p>
              <div className='mic-btns'>
              <button onClick={SpeechRecognition.startListening}>Start ⏺</button>
              <button onClick={SpeechRecognition.stopListening}>Stop ⏹</button>
              <button onClick={resetTranscript}>Reset 🔁</button>
              </div>
              <p className='tt'>{transcript}</p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
        )}

        <IoMdSettings />
      </div>
    </header>
  );
};

export default Navbar;
