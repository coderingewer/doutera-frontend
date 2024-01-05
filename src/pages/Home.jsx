import React, { useEffect, useState } from 'react'
import "./home.css"
import backvideo from "../assets/Backgrounds/backgroundvideo.webm"
import TopBar from '../bars/TopBar'

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer); // Komponent unmount olduğunda timeout'u temizle
  }, []);
  return (
    <div className='home' >
            <TopBar page="home-style"/>
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">Model Y Accessories</span>
            <span className="home-content-subtitle">
              The best way to save your Tesla Model Y
            </span>
          </div>
          <a target='_blank' href='https://www.github.com' className='buy-now-home-btn' >Buy Now</a>
        </div>
        <video className='modely-aksesories-video' autoPlay muted loop>
          <source src={backvideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Home