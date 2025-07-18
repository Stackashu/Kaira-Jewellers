import Navbar from "../components/LandingPage/Navbar.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";

import style from "../styles/Landing/LandingPage.module.css";

// import AnimationCompo from "../components/LandingPage/AnimationCompo.jsx";
// import Stores from "../components/LandingPage/Stores.jsx";
// import Collections from "../components/LandingPage/Gallery.jsx";
// import Services from "../components/LandingPage/Services.jsx";
// import Gallery from "../components/LandingPage/Collection.jsx";
// import Testimonials from "../components/LandingPage/Testimonials.jsx";
// import Catogories from "../components/LandingPage/Catogories.jsx";
// import BlackBanner from "../components/LandingPage/BlackBanner.jsx";
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
