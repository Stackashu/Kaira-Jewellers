import React from 'react'
import LandingPage from "./Layout/LandingPage.jsx"
import useScrollToTop from "./hooks/useScrollToTop.js"

const App = () => {
  // Ensure scroll to top works at app level too
  useScrollToTop();
  
  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default App
