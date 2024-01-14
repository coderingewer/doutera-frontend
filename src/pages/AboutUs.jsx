import React, { useEffect } from 'react'
import TopBar from '../bars/TopBar'
import "./aboutus.css"
import "./home.css"
import logo from "../assets/Duotera/logovertical.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetDetailsAsync } from '../Api/Details/DetailSlice'
import Footer from '../bars/Footer'

function AboutUs() {
    const detailsReal = useSelector(state => state.details.detailsReal)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetDetailsAsync())
    }, [dispatch])
    return (
        <>
            <TopBar page="home-style" />
            <div className='about-us-page' >
                <div className="about-us-barner">
                </div>
                <div className="about-us-content">
                    <span className="about-us-title">About Us</span>
                    <span className='about-us-text' >{detailsReal.aboutus}</span>
                    <img className='about-us-logo' src={logo} alt="" />
                    <div className="about-us-links">
                        <Link to='/dealership-form' className='buy-now-home-btn color1' >Dealership Form</Link>
                        <Link to='/contact' className='buy-now-home-btn color1' >Contact Us</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs