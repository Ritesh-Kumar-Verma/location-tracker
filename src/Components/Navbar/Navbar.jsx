import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = ({activeTab , setActiveTab}) => {
  const navbarMenuItems = ["Members", "Groups"];

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="left-navbar">

        <img src={assets.boy} alt="" />
        </div>
        <div className="navbar-search-box">
          <img src={assets.search} alt="" />

          <input type="text" placeholder="Search..." />
        </div>
        <div className="right-navbar">
        <img src={assets.boy} alt="" />

        </div>
      </div>

      <div className="navbar-menu-items">
        {navbarMenuItems.map((data, index) => {
          return (
            <div className={`navbar-item ${activeTab === data ? "active" : ""}`} key={index} onClick={()=>{setActiveTab(data)}}>
              {data}
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
