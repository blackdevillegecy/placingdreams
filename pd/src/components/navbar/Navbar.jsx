import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <a id="logo" href="#home">
            <img src={logo} alt="" width="99" height="33" />
          </a>
          <p><a href="#home">Home</a></p>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#possibility">About Us</a></p>
          <p><a href="#features">Courses</a></p>
          <p><a href="#blog">Testimonials</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><a href="#footer">Contact Us</a></p>
        <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdDXfBr5bJG8xEFa0O4VkkyKUM7yLuCw1iU7T-aHvV1_kV7RA/formResponse"><button type="button">Enroll</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">Gallery</a></p>
              <p><a href="#possibility">About Us</a></p>
              <p><a href="#features">Courses</a></p>
              <p><a href="#blog">Testimonials</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Contact Us</p>
              <Link to="/enroll"><button type="button">Enroll</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
