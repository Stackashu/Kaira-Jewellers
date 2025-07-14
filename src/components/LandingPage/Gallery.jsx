import style from "../../styles/LandingPage/Gallery.module.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const outerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !outerRef.current) return;

    let startValue = "top 10%";
    let borderRadius = "25px";
    let scaleValue = "1.2";
    let finalValue = "0.95";
    if (window.innerWidth <= 768) {
      startValue = "top 50%";
      scaleValue = "0.9";
      borderRadius = "0px";
      finalValue = "1";
    }
    if (window.innerWidth <= 486) {
      startValue = "top 50%";
      scaleValue = "0.9";
      borderRadius = "0px";
      finalValue = "1";
    }

    const anim = gsap.fromTo(
      videoRef.current,
      {
        y: 100,
        scale: scaleValue,
        borderRadius: "0px",
      },
      {
        y: 0,
        scale: finalValue,
        borderRadius: borderRadius,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: outerRef.current,
          start: startValue,
          end: "top -10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      if (anim) anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={style.Collections_Cont} ref={outerRef}>
      <h1>Gallery</h1>
      <div   ref={videoRef} className={style.video_Cont} style={{padding:"10px",borderRadius:'25px',background:"white"}}>
        <iframe
        
          className={style.iframe_vid}
          src="https://www.youtube.com/embed/kYOP52BUZTI?si=Ji744qertjXgop0t&controls=0&showinfo=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Collections;
