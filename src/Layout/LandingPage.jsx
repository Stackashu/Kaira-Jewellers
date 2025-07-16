
import Navbar from "../components/LandingPage/Navbar.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";

import style from "../styles/Landing/LandingPage.module.css";

import AnimationCompo from "../components/LandingPage/AnimationCompo.jsx";
import Stores from "../components/LandingPage/Stores.jsx";
import Collections from "../components/LandingPage/Gallery.jsx";
import Services from "../components/LandingPage/Services.jsx";
import Gallery from "../components/LandingPage/Collection.jsx";
import Testimonials from "../components/LandingPage/Testimonials.jsx";
import Catogories from "../components/LandingPage/Catogories.jsx";
import BlackBanner from "../components/LandingPage/BlackBanner.jsx"
import Footer from "../components/LandingPage/Footer.jsx";
const LandingPage = () => {
  // Use the custom hook for scroll to top functionality
  useScrollToTop();

  return (
    <div className={style.LandingPage_cont}>
      <Navbar />
      <AnimationCompo />
      <Stores/>
      {/* <Carasoule/> */}
      <Collections/>
      <Gallery/>
      <Services/>
      <BlackBanner/>
      {/* <Catogories/> */}
      {/* <Testimonials/> */}
      <Footer/>
      
    </div>
  );
};

export default LandingPage;
