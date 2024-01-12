import React, { useEffect } from 'react';
import "./contact.css"
import TopBar from "../bars/TopBar"
import MapWithMarker from './MapWithMarker';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailsAsync } from '../Api/Details/DetailSlice';

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
          <span className='row-titles-contact' >
            Worldwide Offices
          </span>
          <MapWithMarker />
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
    </>
  );
};

export default Contact;