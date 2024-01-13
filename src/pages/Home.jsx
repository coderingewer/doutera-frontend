import React, { useEffect, useState } from 'react'
import "./home.css"
import TopBar from '../bars/TopBar'
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailsAsync } from '../Api/Details/DetailSlice';
import { GetAllProducts } from '../Api/Products/ProductSlice';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const details = useSelector(state => state.details.detailsReal)
  const productSuccess = useSelector(state => state.products.success)
  const detailsSuccess = useSelector(state => state.details.success)
  const scrollBottom = () => {
    window.scrollTo(0, 500);
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
    dispatch(GetAllProducts())
    TimerSec()
  }, [dispatch, detailsSuccess])

  return (
    <div className='home' >
      <TopBar page="home-style" />
      {
        detailsSuccess &&
        <div className="modely-aksesories-cover">
          <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
            <div className="home-content-text">
              <span className="home-content-title">{details.homeTitle}</span>
              <span className="home-content-subtitle">
                {details.homeSubTitle}
              </span>
            </div>
            <div className="home-links">
              <button onClick={scrollBottom} className='buy-now-home-btn color2' >Review Products</button>
              <a href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
            </div>
          </div>
          <video preload="auto" className='modely-aksesories-video' autoPlay muted loop>
            <source src="https://res.cloudinary.com/ddeatrwxs/video/upload/v1704919064/assets/Backgrounds/s2nvw7oakera1sqq3zwc.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div >
      }
      {
        productSuccess ? <Products /> : <div className='loading' >Loading products..</div>

      }
      <div className="modely-aksesories-cover">
        <div id='home-model-y-content' className={isVisible ? 'visible home-content' : 'hidden'} >
          <div className="home-content-text">
            <span className="home-content-title">{details.homeTitle}</span>
            <span className="home-content-subtitle">
              {details.homeSubTitle}
            </span>
          </div>
          <div className="home-links">
            <a href={detailsReal.markerurl} className='buy-now-home-btn color1' >Buy Now</a>
          </div>
        </div>
        <video className='modely-aksesories-video' autoPlay muted loop>
          <source src="https://res.cloudinary.com/ddeatrwxs/video/upload/v1704919064/assets/Backgrounds/s2nvw7oakera1sqq3zwc.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div >
    </div>
  )
}

export default Home