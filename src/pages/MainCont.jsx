import React from "react";
import AnimationCompo from "../components/LandingPage/AnimationCompo";
import Stores from "../components/LandingPage/Stores.jsx";

import Gallery from "../components/LandingPage/Gallery.jsx";
import BlackBanner from "../components/LandingPage/BlackBanner.jsx";
import Testimonials from "../components/LandingPage/Testimonials";
import Catogories from "../components/LandingPage/Catogories";
import Services from "../components/LandingPage/Services.jsx";
const MainCont = () => {
  return (
    <div>
      <AnimationCompo />
      <Catogories />
      <Gallery />
      <Services />
      <BlackBanner />
      <Testimonials />
    </div>
  );
};

export default MainCont;
