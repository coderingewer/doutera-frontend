import React, { useState } from 'react'
import "./sidemenu.css"
import { Link } from 'react-router-dom'


function SideMenu() {
    const handleTogleMenu = () => {
        const linksMenu = document.getElementById("links-menu");
       linksMenu.style.display = "none"
    }
    return (
        <div id='links-menu' className='side-menu' >
            <Link onClick={()=>handleTogleMenu()} to="/dealership-form">Dealership</Link>
            <Link onClick={()=>handleTogleMenu()} to="/about-us">About Us</Link>
            <Link onClick={()=>handleTogleMenu()} to="/contact">Contact</Link>
        </div>
    )
}

export default SideMenu