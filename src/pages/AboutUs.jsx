import React from 'react'
import TopBar from '../bars/TopBar'
import "./aboutus.css"
import "./home.css"
import logo from "../assets/Duotera/logovertical.png"
import { Link } from 'react-router-dom'
import Contact from './Contact'

function AboutUs() {
    return (
        <>
            <TopBar page="home-style" />
            <div className='about-us-page' >
                <div className="about-us-barner">
                </div>
                <div className="about-us-content">
                    <span className="about-us-title">About Us</span>
                    <span className='about-us-text' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
                        consequat sapien vitae molestie. Cras fringilla augue risus, vel cursus nibh
                        commodo eu. Nam sagittis lectus at sapien pretium interdum. Sed vitae mauris sed
                        leo faucibus sodales. Fusce eu velit malesuada, semper ex non, ornare leo. Sed ut
                        nisi at lectus iaculis ullamcorper. Vestibulum ut scelerisque mauris, quis auctor
                        nulla. Donec consectetur volutpat mauris, eu dignissim felis malesuada eget. Mauris
                        at arcu quis metus hendrerit semper non quis odio. Phasellus blandit iaculis lectus
                        semper sollicitudin. Praesent id ultricies odio.</span>
                    <img className='about-us-logo' src={logo} alt="" />
                    <div className="about-us-links">
                        <Link to='/dealership-form' className='buy-now-home-btn color1' >Dealership Form</Link>
                        <Link to='/contact' className='buy-now-home-btn color1' >Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs