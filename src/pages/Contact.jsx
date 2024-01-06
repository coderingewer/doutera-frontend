import React from 'react';
import "./contact.css"
import TopBar from "../bars/TopBar"
import MapWithMarker from './MapWithMarker';

const Contact = () => {
  const position = [51.505, -0.09];
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
          <span className="contact-content-content">+2213456782</span>
          <span className="contact-content-title">E-mail Adress</span>
          <span className="contact-content-content">duotera@duotera.com</span>
        </div>
        <span className='row-titles-contact' >Contact</span>
      </div>
      </div>
    </>
  );
};

export default Contact;