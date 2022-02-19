import React from "react";
import './Navbar.css'
import {  Nav,NavDropdown, Container} from 'react-bootstrap';
function Navbar() {
  return (
    <div>
      {/* <header className="header" id="header">
        <a href="#" className="logo">
          <i className="fas fa-mask"></i>MaskCoder
        </a>


        <nav className="navbar">
          <a href="#header">About</a>
          <a href="#services">Events</a>
          <a href="#portfolio">Contacts</a>

        </nav>

        <div id="menu-btn" className="fa-solid fa-bars fa-2x"></div>
      </header> */}
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-lg-0  ">
        
        <li className="nav-item ">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item d-flex">
          <a className="nav-link" href="#">Events</a>
        </li>
        <li className="nav-item d-flex">
          <a className="nav-link" href="#">Contact</a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to Jagriti.</h1>
          {/* <p>Best websites for developing companies.</p> */}
        </div>
      </section>

      <section className="services" id="services">
        <h1>About Us</h1>
        <div className="services-box">
          <div className="box">
            <i className="fas fa-code fa-2x"></i>
            <div className="box-content">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                libero consequuntur similique ut placeat aut at repellendus in,
                iure ullam.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-pencil fa-2x"></i>
            <div className="box-content">
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                libero consequuntur similique ut placeat aut at repellendus in,
                iure ullam.
              </p>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <div className="box-content">
              <h3>E-commerce Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                libero consequuntur similique ut placeat aut at repellendus in,
                iure ullam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
