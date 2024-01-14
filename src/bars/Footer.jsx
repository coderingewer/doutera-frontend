import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { useSelector } from 'react-redux'





function Footer() {
    const detailsReal = useSelector(state => state.details.detailsReal)
  return (
    <div className='footer' >
        <Link to="/">Home</Link>
        <Link to="/dealership-form">Dealership Application</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About Us</Link>
        <a href={detailsReal.markerurl} >Buy Now</a>
    </div>
  )
}

export default Footer