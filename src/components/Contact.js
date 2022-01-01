import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Contact.css';
import Transition from './Transition';

function Contact() {
  const contact = gsap.timeline();
  const contactH1 = useRef(null);
  const contactImg = useRef(null);

  useEffect(() => {
    contact.from(
      contactH1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      '-=3.5'
    );
    contact.from(
      contactImg.current,
      {
        duration: 0.5,
        y: -200,
        opacity: 0,
      },
      '-=3'
    );
  });

  return (
    <div>
      <Transition timeline={contact} />
      <div className="contact-image contact-overlay" ref={contactImg}></div>
      <div className="container-contact">
        <h1 ref={contactH1}>Contact Page</h1>
      </div>
    </div>
  );
}

export default Contact;
