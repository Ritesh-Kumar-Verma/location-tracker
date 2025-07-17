import React, { useEffect, useState } from 'react'
import './Me.css'
import { MapContainer } from 'react-leaflet'
import Map from '../Map/Map'


const Me = () => {
    const [myPosition , setMyPosition] = useState(null)
    useEffect(()=>{

        if(navigator.geolocation){
        const myWatcher = navigator.geolocation.watchPosition(
        (pos)=>{const {latitude,longitude} = pos.coords
        console.log([latitude,longitude])
            setMyPosition([latitude,longitude])
    },
        (error)=>{console.log(error)},
        {enableHighAccuracy:true,
            maximumAge:0,
            timeout:10000
        }
    )
        return ()=>{navigator.geolocation.clearWatch(myWatcher)}
    }

    },[])
    
    
  return (
    <div className="my-location-window">
        <Map position={myPosition}/>
    </div>
  )
}

export default Me






