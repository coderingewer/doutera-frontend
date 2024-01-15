import React, { useEffect } from 'react';
import "./contact.css"
import TopBar from "../bars/TopBar"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailsAsync } from '../Api/Details/DetailSlice';
import Footer from '../bars/Footer';

const Contact = () => {
  const detailsReal = useSelector(state => state.details.detailsReal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDetailsAsync())
  }, [dispatch])
  return (
    <>
      <TopBar />
      <div className="contact-page">
        <div className='offices' >
          <LazyLoadImage
            effect='blur'
            width={"100%"}
            height={"100%"}
            src={detailsReal.contactPageImageUrl} alt="" />
        </div>
        <div className="contact-info">
          <div className="contact-content">
            <span className="contact-content-title">Phone Number</span>
            <span className="contact-content-content">{detailsReal.phone}</span>
            <span className="contact-content-title">E-mail</span>
            <span className="contact-content-content">{detailsReal.email}</span>
            <span className="contact-content-title">Address</span>
            <span className="contact-content-content">{detailsReal.address}</span>
          </div>
          <span className='row-titles-contact' >Contact</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;