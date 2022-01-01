import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './About.css';
import Transition from './Transition';

function About() {
  const about = gsap.timeline();
  const aboutH1 = useRef(null);
  const aboutImg = useRef(null);

  useEffect(() => {
    about.from(
      aboutH1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      '-=3.5'
    );
    about.from(
      aboutImg.current,
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
      <Transition timeline={about} />
      <div className="about-image about-overlay" ref={aboutImg}></div>
      <div className="container-about">
        <h1 ref={aboutH1}>About Page</h1>
      </div>
    </div>
  );
}

export default About;
