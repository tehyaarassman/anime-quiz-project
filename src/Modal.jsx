import React, { Component } from 'react';
import './modal.css';
import img1 from './images/answerOne/naruto-cat2.jpeg';
import img2 from './images/answerTwo/nezuko-cat.jpg';
import img3 from './images/answerThree/sasuke-cat.png';
import img4 from './images/answerTwo/hinata-cat.jpeg';
import img5 from './images/answerOne/deku-cat.jpeg';
// import { ProgressPlugin } from 'webpack';

const Modal = ({ handleClose, show, children, prop }) => {
  let url = 'You have not taken the quiz yet';
  let description = 'You have not taken the quiz yet'
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  if (prop.answerOne > prop.answerTwo && prop.answerOne > prop.answerThree && prop.answerOne > prop.answerFour) {
    url = img1;
    description = 'You are Naruto Cat! You are outgoing, motivated and supportive. You care about your friends more than you do about yourself. And you love ramen, of course.';
  } 
  else if(prop.answerTwo > prop.answerOne && prop.answerTwo > prop.answerThree && prop.answerTwo > prop.answerFour) {
    url = img2;
    description = 'You are Nezuko Cat!! You have a kind soul. You are trustworthy and lovable. You have a strong desire to help others and you stand up for anyone that you love, no matter what the circumstances are.'
  } 
  else if (prop.answerThree > prop.answerOne && prop.answerThree > prop.answerTwo && prop.answerThree > prop.answerFour) {
    url = img3;
    description = 'You are Sasuke Cat! You have trouble connecting to other people and prefer to work alone. You are very goal oriented and work hard for those goals.';
  }
  else if (prop.answerFour > prop.answerOne && prop.answerFour > prop.answerTwo && prop.answerFour > prop.answerThree) {
    url = img4;
    description = 'You are Hinata Cat! You are a shy and try to blend in to your surroundings. You are always working your hardest to become a better person and are always practicing to become more skilled. You are devoted to your friends and loved ones.'
  }
  else {
    url = img5;
    description = 'You are Deku Cat! You have a dream and you will work as hard as you can to reach that dream. You have a kind heart, and you want to help people whenever possible. Although you may not have been born narutally gifted, you work harder than anyone else. Because of this, you acheive greatness';
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <img id={'modal-img'} src={url}/>
        <p className={'description'}>{description}</p>
        <button className={'closeBtn'} type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;