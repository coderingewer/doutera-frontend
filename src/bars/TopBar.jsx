import React, { useEffect, useState } from 'react'
import './topbar.css'
import duoteralogo from '../assets/Duotera/logovertical.png'
import { Link } from 'react-router-dom';
import menuIcon from "../assets/icons/menu.png"


function TopBar(props) {
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
  const linksMenu = document.getElementById("links-menu");
  const [isToggled, setToggled] = useState(false);
  const handleTogleMenu  =()=>{
    setToggled(!isToggled)
    isToggled ? linksMenu.style.display="flex" : linksMenu.style.display="none"
  }

    return (
      <div className={scrollPosition > 1000 ? "top-bar top-bar-blur" : "top-bar" + " " + props.page}
      > <Link to="/">
          <div className="top-bar-logo">
            <img src={duoteralogo} alt="Duotera" />
          </div>
        </Link>
        <div className="navs-in-top-bar">
          <Link to="/modely-aksesories">Model Y Accessories</Link>
          <Link to="/dealership-form">Dealership</Link>
          <Link href="/a">About Us</Link>
        </div>
        <button className='menu-btn' onClick={handleTogleMenu}><img src={menuIcon} alt="" /></button>
      </div>
    )
  }

  export default TopBar