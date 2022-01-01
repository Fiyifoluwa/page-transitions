import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';
import Transition from './Transition';

function Home() {
  const home = gsap.timeline();
  const homeH1 = useRef(null);
  const homeImg = useRef(null);

  useEffect(() => {
    home.from(
      homeH1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      '-=3.5'
    );
    home.from(
      homeImg.current,
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
      <Transition timeline={home} />
      <div className="home-image home-overlay" ref={homeImg}></div>
      <div className="container-home">
        <h1 ref={homeH1}>Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
