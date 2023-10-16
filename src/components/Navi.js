import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navi = () => {
  return (
    <>
    
     <nav>
      <ul>
        <li>
          <NavLink style={({isActive}) => ({ color: isActive ? "orangered" : "white" })} to="/BilgeAdam">Main</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({ color: isActive ? "orangered" : "white" })} to="blog">Blog</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({ color: isActive ? "orangered" : "white" })} to="gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({ color: isActive ? "orangered" : "white" })} to="news">News</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({ color: isActive ? "orangered" : "white" })} to="contact">Contact</NavLink>
        </li>

      </ul>
    </nav>
     {/* Önemli */}
    <Outlet/>
    </>
   
  );
};

export default Navi;
