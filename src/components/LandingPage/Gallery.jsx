import style from "../../styles/LandingPage/Gallery.module.css";
import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactCon } from "../../Context/ContactContext";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const outerRef = useRef(null);
  const videoRef = useRef(null);
  const{page1} = useContext(ContactCon)
  // console.log(page1?.video) // set here your  video ---------------------------------------- 
  useEffect(() => {
    if (!videoRef.current || !outerRef.current) return;
 

    // Responsive values
    let startValue, borderRadius, scaleValue, endValue;
    const width = window.innerWidth;

    if (width <= 480) {
      startValue = "top 80%";
      borderRadius = "0px";
      scaleValue = 1;
      endValue = "top 50%";
    } else if (width <= 768) {
      startValue = "top 50%";
      borderRadius = "0px";
      scaleValue = 1.4;
      endValue = "bottom bottom";
    } else {
      startValue = "top 50%";
      borderRadius = "25px";
      scaleValue = 0.8;
      endValue = "top 10%";
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
        scale: 1,
        borderRadius: borderRadius,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: outerRef.current,
          start: startValue,
          // markers:true,
          end: endValue,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      if (anim) anim.kill();
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div  className={style.Collections_Cont} ref={outerRef}>
      <h1>Gallery</h1>
      <div   ref={videoRef} className={style.video_Cont} >
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
