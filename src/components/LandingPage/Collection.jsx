import style from '../../styles/LandingPage/Collection.module.css';
import React, { useRef, useEffect } from 'react';
import jewellery from "../../assets/Images/jewellery.jpg";
import gsap from "gsap";

const Gallery = () => {
  const photoCont1Ref = useRef(null);
  const photoCont2Ref = useRef(null);
  const anim1 = useRef(null);
  const anim2 = useRef(null);

  useEffect(() => {
    // Reset any previous animations
    gsap.set(photoCont1Ref.current, { x: "0%" });
    gsap.set(photoCont2Ref.current, { x: "0%" });

    // Animate both rows in sync but in opposite directions, smoothly and continuously
    if (photoCont1Ref.current && photoCont2Ref.current) {
      anim1.current = gsap.to(photoCont1Ref.current, {
        x: "-20%",
        repeat: -1,
        duration: 60,
        ease: "power1.inOut", // smoother than linear
      });
      anim2.current = gsap.to(photoCont2Ref.current, {
        x: "20%",
        repeat: -1,
        duration: 60,
        ease: "power1.inOut", // smoother than linear
      });
    }

    // Cleanup on unmount
    return () => {
      if (anim1.current) anim1.current.kill();
      if (anim2.current) anim2.current.kill();
    };
  }, []);

  return (
    <div className={style.outer_CollBox}>
      <h1>Collections</h1>
      <div className={style.photos_Wrapper}>
        <div
          className={style.photo_Cont}
          ref={photoCont1Ref}
        >
          {Array.from({ length: 18 }).map((_, idx) => (
            <img src={jewellery} alt="jewellery" key={`row1-${idx}`} />
          ))}
        </div>
        <div
          className={style.photo_Cont}
          ref={photoCont2Ref}
        >
          {Array.from({ length: 18 }).map((_, idx) => (
            <img src={jewellery} alt="jewellery" key={`row2-${idx}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
