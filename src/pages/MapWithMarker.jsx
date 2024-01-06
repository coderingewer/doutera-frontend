import React from 'react';
import duoicon from "../assets/Duotera/logo horizontal.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const MapWithMarker = () => {
  const position = [38.4496027, 27.1904034];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup className='pop-up' >
          Duotera
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;
