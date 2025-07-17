import React, { useEffect } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from '../Navbar/Navbar'
import {useState} from 'react'
import Members from '../Members/Members'
import Groups from '../Groups/Groups'
//need to delete if not used
import Map from "../Map/Map";
import Me from "../Me/Me";

const Home = ({username}) => {
    const [activeTab , setActiveTab] = useState("Me")
  
    const [position , updatePosition] = useState(null)

    const tabComponents = {"Members":<Members/>,
    
      "Groups":<Groups/>,
      "Me":<Me/>
    
    }

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude,longitude} = pos.coords
        updatePosition([latitude,longitude])
      },(error)=>{
        console.error("error in getting location")
      },{
        enableHighAccuracy:true,
        timeout:1000,
        maximumAge:0
      })
    },[])


    



  return <div className="home-window">
    
    {/* <Sidebar/> */}

    <Navbar username={username} activeTab={activeTab} setActiveTab={setActiveTab}/>


    {tabComponents[activeTab]}

  

     
   
    
    </div>;
};

export default Home;



