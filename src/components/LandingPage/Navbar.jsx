import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/LandingPage/Navbar.module.css";
import headeLogo from "../../assets/Images/KairaLogo.png";
import { useNavigate } from "react-router-dom";
// import gsap from "gsap";

const nav = [
  {name:"About",link:"/"},
  {name:"Stores",link:"/stores"},
  {name:"Franchise",link:"/Franchise"},
  {name:"Customize Product",link:"Customization"},
  {name:"Franchise Enquiry",link:"FranchiseEnq"}
 
]; 

const Navbar = () => {
  const navigate = useNavigate(null)
  const navBarRef = useRef(null);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  // const crossRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <header className={style.header_OuterBox}>
      <div className={style.header_InnerBox}>
        <img src={headeLogo} alt="Kaira Jewellers" />

        <div ref={navBarRef}  className={`${style.nav_Wrapper} ${isTrayOpen ? style.nav_WrapperOpen : style.nav_WrapperClose } `}>
          <svg
            onClick={() => setIsTrayOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className={style.cross_Nav}
          >
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <nav className={style.nav}>
            {nav.map((item, idx) => (
              <div key={idx} >
                <li
                  onClick={() => {setActiveIdx(idx); setIsTrayOpen(false); navigate(`${item.link}`) }}
                  style={{
                    color: activeIdx === idx ? "rgb(179, 100, 100)" : "",
                    fontWeight: activeIdx === idx ? "bold" : "normal",
                    transition: "color 0.2s",
                  }}
                >
                  {item.name}
                  <span className={style.left}></span>
                  <span className={style.right}></span>
                </li>
              </div>
            ))}
          </nav>
        </div>

        <div className={style.nav_RightBox}>
          <div className={style.Contact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.telephone_Svg}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                fill="rgb(187, 79, 79)"
              />
            </svg>
            <h1>Contact Us</h1>
          </div>
          {/* hamburger code  */}
          <div onClick={() => setIsTrayOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.hamburger}
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="2"
                rx="1"
                fill="rgb(187, 79, 79)"
              />
              <rect
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
                fill="rgb(187, 79, 79)"
              />
              <rect
                x="4"
                y="16"
                width="16"
                height="2"
                rx="1"
                fill="rgb(187, 79, 79)"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
