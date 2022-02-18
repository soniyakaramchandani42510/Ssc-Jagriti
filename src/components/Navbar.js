import React from "react";
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <header className="header" id="header">
        <a href="#" className="logo">
          <i className="fas fa-mask"></i>MaskCoder
        </a>

        <nav className="navbar">
          <a href="#header">home</a>
          <a href="#services">services</a>
          <a href="#portfolio">projects</a>
          <a href="#contact">contact</a>
        </nav>

        <div id="menu-btn" className="fa-solid fa-bars fa-2x"></div>
      </header>

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
