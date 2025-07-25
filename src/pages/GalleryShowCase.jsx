import React from "react";
import style from "../styles/pages/GalleryShowCase.module.css";
import Carasoule from "../components/LandingPage/Carasoule";
import D1 from "../assets/Images/diamonds/d0.jpg";
import D2 from "../assets/Images/diamonds/d1.jpg";
import D3 from "../assets/Images/diamonds/d2.jpg";
import D4 from "../assets/Images/diamonds/d4.jpg";
import D5 from "../assets/Images/diamonds/d4.jpg";
import G1 from '../assets/Images/gold/g1.webp'
import G2 from '../assets/Images/gold/g2.webp'
import G3 from '../assets/Images/gold/g3.webp'
import G4 from '../assets/Images/gold/g4.webp'
import G5 from '../assets/Images/gold/g5.webp'
import S1 from '../assets/Images/silver/s1.webp'
import S2 from '../assets/Images/silver/s2.webp'
import S3 from '../assets/Images/silver/s3.webp'
import gold from "../assets/Images/biscuits/gold.png"
import silver from "../assets/Images/biscuits/silver.png"
const GalleryShowCase = () => {
  return (
    <div>
      <Carasoule />
      {/* diamond section  */}
      <div className={style.diamond_Div}>
        <div className={style.dia_Top}>
          <h1>Diamond collectoin</h1>
          <h3>Crafted by nature, perfected by design.</h3>
        </div>
        <div className={style.dia_Bottom}>
          <div className={style.pic_Cont}>
            <div className={style.largeCard}>
              <img className={style.pic1} src={D1} alt="" />
            </div>
            <div>
              <img className={style.pic2} src={D2} alt="" />
            </div>
            <div>
              <img className={style.pic3} src={D3} alt="" />
            </div>
            <div>
              <img className={style.pic4} src={D4} alt="" />
            </div>
            <div>
              <img className={style.pic5} src={D5} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* gold section */}
      <div className={style.gold_Div}>
        <div className={style.dia_Top}>
          <h1> Gold collectoin</h1>
          <h3>A piece of gold, a piece of your story.</h3>
        </div>
        <div className={style.dia_Bottom}>
          <div className={style.pic_Cont}>
            <div className={style.largeCard}>
              {" "}
              {/* wraps pic1 */}
              <img className={style.pic1} src={G1} alt="" />
            </div>
            <div>
              <img className={style.pic2} src={G2} alt="" />
            </div>
            <div>
              <img className={style.pic3} src={G3} alt="" />
            </div>
            <div>
              <img className={style.pic4} src={G4} alt="" />
            </div>
            <div>
              <img className={style.pic5} src={G5} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* silver section  */}
      <div className={style.silver_Div}>
        <div className={style.dia_Top}>
          <h1> Silver collectoin</h1>
          <h3>Crafted to grace. Designed in silver.</h3>
        </div>
        <div className={style.dia_Bottom}>
          <div className={style.pic_Cont}>
            <div className={style.largeCard}>
              {" "}
              {/* wraps pic1 */}
              <img className={style.pic1} src={S1} alt="" />
            </div>
            <div>
              <img className={style.pic2} src={S2} alt="" />
            </div>
            <div>
              <img className={style.pic3} src={S3} alt="" />
            </div>
            <div>
              <img className={style.pic4} src={S1} alt="" />
            </div>
            <div>
              <img className={style.pic5} src={S2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* gold and silver biscuit  */}

      <div className={style.biscuit}>
        <h1 className={style.biscuit_head} >Gold and Silver Biscuit and Coin</h1>
        <div  className={style.bis_Wrap}>
          <div>
            <img src={gold} alt="" />
          </div>
          <div>
            <img src={silver} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryShowCase;
