import React, { useState } from 'react'
import './Navbar.css'
import logoImage from '../../Assets/logo.svg'

function Navbar({ navbarInvisible, navbarWhite }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div
      className={`navbarOuter ${navbarInvisible ? 'navbarInvisible' : ''} ${
        navbarWhite ? 'navbarWhite' : ''
      }`}
    >
      <nav class='navbar navbar-light'>
        <a className='navbar-brand' href='/'>
          {' '}
          <img src={logoImage} alt="Jagriti Logo" />
        </a>
        <div
          className={`hamburger ${navbarOpen ? 'hamburgerOpen' : ''}`}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`linkContainer ${navbarOpen ? 'linkContainerOpen' : ''}`}
        >
          <a className='nav-link' href='/about'>
            About
          </a>
          <a className='nav-link' href='/events'>
            Events
          </a>
        </div>
        {/* <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button> */}

        {/* <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a className='nav-link' href='/events'>
                Events
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar
