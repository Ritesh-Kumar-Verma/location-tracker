import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from '../Navbar/Navbar'



const Home = ({activeTab, setActiveTab}) => {
  return <div className="home-window">
    
    {/* <Sidebar/> */}

    <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
    
    
    
    </div>;
};

export default Home;
