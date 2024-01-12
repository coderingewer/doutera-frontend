import React, { useEffect, useState } from 'react'
import "./home.css"
import backvideo from "../assets/Backgrounds/backgroundvideo.webm"
import TopBar from '../bars/TopBar'
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailsAsync } from '../Api/Details/DetailSlice';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const details = useSelector(state => state.details.details)
  const data = details != {} ? details : detailsReal;
  const scrollBottom = () => {
    window.scrollTo(0, 700);
  }
  
  const TimerSec = () => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }
  const detailsReal = useSelector(state => state.details.detailsReal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDetailsAsync())
    TimerSec()
  }, [dispatch])
  
  return (
    <div className='home' >
      <TopBar page="home-style" />
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">Model Y Accessories</span>
            <span className="home-content-subtitle">
              The best way to save your Tesla Model Y
            </span>
          </div>
          <div className="home-links">
            <a onClick={scrollBottom} className='buy-now-home-btn color2' >Review Products</a>
            <a target='_blank' href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
          </div>
        </div>
        <video className='modely-aksesories-video' autoPlay muted loop>
          <source src="https://res.cloudinary.com/ddeatrwxs/video/upload/v1704919064/assets/Backgrounds/s2nvw7oakera1sqq3zwc.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div >
      <div >
        <Products />
      </div>
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">Model Y Accessories</span>
            <span className="home-content-subtitle">
              The best way to save your Tesla Model Y
            </span>
          </div>
          <div className="home-links">
            <a target='_blank' href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
          </div>
        </div>
        <video className='modely-aksesories-video' autoPlay muted loop>
          <source src="https://res.cloudinary.com/ddeatrwxs/video/upload/v1704919064/assets/Backgrounds/s2nvw7oakera1sqq3zwc.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div >
    </div>
  )
}

export default Home