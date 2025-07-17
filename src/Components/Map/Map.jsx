import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';
import './Map.css'


const Map = ({position}) => {
    
    //for debugging
    // console.log(position)




    const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [32, 32],
});

  return (
  <div className='map-container'>
    
    {position && (
      <MapContainer center={position} zoom={20} style={{ height: "100vh" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    )}
  </div>
);

}

export default Map