import React from "react";
import './Navbar.css'
// import { Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from "../assets/logo.png"
function Navbar() {

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="error" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-lg-0  ">

              <li className="nav-item ">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link" href="/events">Events</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link" href="/Workshops">Worshops</a>
              </li>
              {/* <li className="nav-item d-flex">
                <a className="nav-link" href="/Contact">Contact</a>
              </li> */}


            </ul>

          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;
