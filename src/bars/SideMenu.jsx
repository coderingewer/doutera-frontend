import React from 'react'
import "./sidemenu.css"
import { Link } from 'react-router-dom'


function SideMenu() {
    return (
        <div id='links-menu' className='side-menu' >
        <Link to="/dealership-form">Dealership</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        </div>
    )
}

export default SideMenu