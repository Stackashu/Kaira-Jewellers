import React, { useContext, useEffect } from "react";
import AnimationCompo from "../components/LandingPage/AnimationCompo";
import Stores from "../components/LandingPage/Stores.jsx";

import Gallery from "../components/LandingPage/Gallery.jsx";
import BlackBanner from "../components/LandingPage/BlackBanner.jsx";
import Testimonials from "../components/LandingPage/Testimonials";
import Catogories from "../components/LandingPage/Catogories";
import Services from "../components/LandingPage/Services.jsx";
import { ContactCon } from "../Context/ContactContext.jsx";
import axios from "axios";
const MainCont = () => {
  const{setPage1} = useContext(ContactCon)

  useEffect(() => {
     axios.get("/api/data/page1").then((res)=>{setPage1(res.data) ; console.log(res.data)}).catch((err)=>console.error(err))

  }, [])
  
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
