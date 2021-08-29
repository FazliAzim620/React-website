import React from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "../images/csm.png";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={BrandLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <NavLink exact to='/' className="nav-link active" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="tel:+923129090007" className="nav-link">
              
                  Call Today   <br />+92 312 9090007
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
