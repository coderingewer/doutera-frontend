import React, { useEffect, useState } from 'react'
import './topbar.css'
import duoteralogo from '../assets/Duotera/logovertical.png'



function TopBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
          window.addEventListener('scroll', handleScroll);
      
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [scrollPosition]); 
  return (
    <div className={scrollPosition > 1000 ? "top-bar top-bar-blur":"top-bar"}
     >
        <div className="top-bar-logo">
            <img src={duoteralogo} alt="Duotera" />
        </div>
            <div className="navs-in-top-bar">
                <a href="/a">Model Y Aksesories</a>
                <a href="/a">About Us</a>
            </div>
    </div>
  )
}

export default TopBar