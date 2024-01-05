import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./contact.css"
import MapWithMarker from './MapWithMarker';

const Contact = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapWithMarker/>
    </div>
  );
};

export default Contact;