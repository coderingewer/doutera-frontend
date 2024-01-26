import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { useSelector } from 'react-redux'
import insta from "../assets/icons/icons8-instagram-64.png"
import yout from "../assets/icons/icons8-youtube-50.png"
import face from "../assets/icons/icons8-facebook-64.png"





function Footer() {
    const detailsReal = useSelector(state => state.details.detailsReal)
  return (
    <div className='footer' >
        <Link to="/">Home</Link>
        <Link to="/dealership-form">Dealership Application</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About Us</Link>
        <a href={detailsReal.markerurl} >Buy Now</a>
        <a href={detailsReal.instagram} ><img className='social-ico' src={insta} alt="instagram" /></a>
        <a href={detailsReal.youtube} ><img className='social-ico' src={yout} alt="Youtube" /></a>
        <a href={detailsReal.facebook} ><img className='social-ico'  src={face} alt="Facebook" /></a>


    </div>
  )
}

export default Footer
