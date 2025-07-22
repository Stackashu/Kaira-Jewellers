import Navbar from "../components/LandingPage/Navbar.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";

import style from "../styles/Landing/LandingPage.module.css";

import Footer from "../components/LandingPage/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContactUs from "../pages/ContactUs.jsx";
import { useContext } from "react";
import { ContactCon } from "../Context/ContactContext";

const LandingPage = () => {
  useScrollToTop();
  const { isOpen } = useContext(ContactCon);

  return (
    <div className={style.LandingPage_cont}>
      <Navbar />
      {isOpen && <ContactUs />}
      <Outlet />
      {/* <Catogories /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
