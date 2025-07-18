import React from 'react'
import AnimationCompo from '../components/LandingPage/AnimationCompo'
import Stores from '../components/LandingPage/Stores.jsx'
import Collections from '../components/LandingPage/Gallery'
import Gallery from '../components/LandingPage/Collection'
import BlackBanner from "../components/LandingPage/BlackBanner.jsx"
import Testimonials from '../components/LandingPage/Testimonials'
import Catogories from '../components/LandingPage/Catogories'
import Services from "../components/LandingPage/Services.jsx"
const MainCont = () => {
  return (
    <div>
      <AnimationCompo/>
      <Stores/>
      <Collections/>
      <Gallery/>
      <Services/>
      <BlackBanner/>
      <Testimonials/>
      <Catogories/>
    </div>
  )
}

export default MainCont
