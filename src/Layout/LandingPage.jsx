import Navbar from "../components/LandingPage/Navbar.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";

import style from "../styles/Landing/LandingPage.module.css";


import Footer from "../components/LandingPage/Footer.jsx";
import { Outlet } from "react-router-dom";
const LandingPage = () => {
  useScrollToTop();

  return (
    <div className={style.LandingPage_cont}>
      <Navbar />
      <Outlet />
      {/* <Catogories /> */}

      <Footer />
    </div>
  );
};

export default LandingPage;
