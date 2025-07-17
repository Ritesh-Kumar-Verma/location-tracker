import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet';
import './Map.css'


const Map = ({position}) => {
    
    //for debugging
    // console.log(position)

    
    const [fullScreen , setFullScreen] = useState(false)
    const handleFullScreen = ()=>{
      setFullScreen(fullScreen?false : true)
    }



    const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [32, 32],
});

  const RecenterMap = ({position})=>{
    const currentMap = useMap()
    useEffect(()=>{
      if(position){
        currentMap.setView(position,currentMap.getZoom(),{animate:true})
      }
    },[position,currentMap])
    return null
  }

  return (
  <div className={`map-container ${fullScreen? "fullscreen" : ""}`}>
    <button className='full-screen-button' onClick={()=>{handleFullScreen()}}>⛶</button>
    {position && (
      <MapContainer center={position} zoom={20} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>You are here!</Popup>
        </Marker>
        <RecenterMap position={position}/>
      </MapContainer>
    )}
    
  </div>
);

}

export default Map



