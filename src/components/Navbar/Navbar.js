import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../Assets/logo.svg";

function Navbar({ navbarInvisible, navbarWhite, navbarLight }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div
      className={`navbarOuter ${navbarInvisible ? "navbarInvisible" : ""} ${
        navbarWhite ? "navbarWhite" : ""
      }`}
    >
      <nav class="navbar navbar-light">
        <a className="navbar-brand" href="/">
          {" "}
          <img src={logoImage} alt="Jagriti Logo" />
        </a>
        <div
          className={`hamburger ${navbarOpen ? "hamburgerOpen" : ""}`}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`linkContainer ${navbarOpen ? "linkContainerOpen" : ""} ${
            navbarLight ? "navbarLight" : ""
          }`}
        >
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/events">
            Events
          </a>
          <a className="nav-link" href="/announcements">
            Announcements
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
