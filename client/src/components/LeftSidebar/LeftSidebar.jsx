import React from "react";
import "./LeftSidebar.css";
import {NavLink} from "react-router-dom";


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        
<div className="side-nav-div">
<NavLink to="/Users"  className="side-nav-links" activeclassname="active" style={{ paddingLeft:"40px" }}>
<p>Users</p>
</NavLink>

    </div>
    </nav>
      
    </div>
  );
};

export default LeftSidebar;
