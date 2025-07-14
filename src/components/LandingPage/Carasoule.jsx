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
      <button className={style.leftArrow} onClick={prevSlide}>&lt;</button>
      <img src={images[current]} alt={`carousel-img-${current + 1}`} className={style.carouselImage} />
      <button className={style.rightArrow} onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carasoule 
