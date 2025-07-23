import style from '../../styles/LandingPage/Carasoule.module.css';
import React, { useState, useEffect } from 'react';
import img1 from '../../assets/Images/CarasoualImg/summer_banner_hp.jpg';
import img2 from '../../assets/Images/CarasoualImg/carasoualIMg2.webp';
import img3 from '../../assets/Images/CarasoualImg/carasousalImg3.webp';

const images = [img1, img2, img3];

const Carasoule = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className={style.carouselContainer}>
      <button className={style.leftArrow} onClick={prevSlide} aria-label="Previous Slide">
        <svg  viewBox="0 0 24 24" fill="none">
          <polyline points="15 18 9 12 15 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <img src={images[current]} alt={`carousel-img-${current + 1}`} className={style.carouselImage} />
      <button className={style.rightArrow} onClick={nextSlide} aria-label="Next Slide">
        <svg  viewBox="0 0 24 24" fill="none">
          <polyline points="9 6 15 12 9 18" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default Carasoule 
