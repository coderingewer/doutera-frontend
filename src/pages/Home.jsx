import React, { useEffect, useRef, useState } from 'react'
import "./home.css"
import TopBar from '../bars/TopBar'
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailsAsync } from '../Api/Details/DetailSlice';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const details = useSelector(state => state.details.details)
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
  const videoRef = useRef(null);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDetailsAsync())
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      video.play();
    } else {
      const handleCanPlay = () => {
        video.play();
      };
      video.addEventListener('loadedmetadata', handleCanPlay);
      return () => {
        video.removeEventListener('loadedmetadata', handleCanPlay);
      };
    }
  }, [dispatch])

  TimerSec()
  console.log(details)
  return (
    <div className='home' >
      <TopBar page="home-style" />
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">{details.homeTitle}</span>
            <span className="home-content-subtitle">
              {details.homeSubTitle}
            </span>
          </div>
          <div className="home-links">
            <a onClick={scrollBottom} className='buy-now-home-btn color2' >Review Products</a>
            <a target='_blank' href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
          </div>
        </div>
        <video ref={videoRef} preload="auto" className='modely-aksesories-video' autoPlay muted loop>
          <source src={details.homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div >
      <div >
        <Products />
      </div>
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">{details.homeTitle}</span>
            <span className="home-content-subtitle">
              {details.homeSubTitle}
            </span>
          </div>
          <div className="home-links">
            <a target='_blank' href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
          </div>
        </div>
        <video className='modely-aksesories-video' autoPlay muted loop>
          <source src={details.homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div >
    </div>
  )
}

export default Home