import React, { useRef, useEffect } from 'react';
import style from "../../styles/LandingPage/Hero.module.css";
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, duration: 2, ease: "power2.inOut" }
      );
    }
  }, []);

  return (
    <div className={style.Hero_OuterBox} >
      <div ref={heroRef}>
        <div className={style.Hero_InnerBox}>
          <h1>
            Kaira<br />
            Jewellers
          </h1>
          <p>
            Jewellery is a story you wear, a memory you treasure, and a promise
            you keep.
          </p>
        </div>

        <div className={style.Button_box}>
          <div className={style.Button_Wrapper}>
            <svg
              className={style.arrow_Down}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="6" fill="#fff" />
              {/* Vertical line */}
              <line
                x1="16"
                y1="8"
                x2="16"
                y2="20"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Arrow down */}
              <path
                d="M10 18l6 6 6-6"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
