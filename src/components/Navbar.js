import React from "react";
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <header class="header" id="header">
        <a href="#" class="logo">
          <i class="fas fa-mask"></i>MaskCoder
        </a>

        <nav class="navbar">
          <a href="#header">About</a>
          <a href="#services">Events</a>
          <a href="#portfolio">Contacts</a>
        </nav>

        <div id="menu-btn" class="fa-solid fa-bars fa-2x"></div>
      </header>

      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-heading">Welcome to Jagriti.</h1>
          {/* <p>Best websites for developing companies.</p> */}
        </div>
      </section>

      <section class="services" id="services">
        <h1>About Us</h1>
        <div class="services-box">
          <div class="box">
            <i class="fas fa-code fa-2x"></i>
            <div class="box-content">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                libero consequuntur similique ut placeat aut at repellendus in,
                iure ullam.
              </p>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-pencil fa-2x"></i>
            <div class="box-content">
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                libero consequuntur similique ut placeat aut at repellendus in,
                iure ullam.
              </p>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-shopping-cart fa-2x"></i>
            <div class="box-content">
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
