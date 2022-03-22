import React from 'react'
import '../Navbar/Navbar.css'
import './Home.css'
import homeImage from '../../Assets/homeimg.png'

function Home() {
  return (
    <>
      <div>
        <section className='hero'>
          <div className='hero-content'>
            <div className='homeimgContainer'>
              <img className='homeimg' src={homeImage} />
              <p>JAGRITI</p>
              <div className='breakLine'></div>
            </div>
            {/* <h1 className="hero-heading">Welcome to Jagriti.</h1> */}
            <p className='paras'>
              Welcome to the annual socio-awareness weekend of IIT BHU
            </p>

            <div class='box'>
              <button class='btn1 btn2 button'>
                <a href='/events'>Explore Events &#x0003E;</a>
              </button>
              <button class='btn1 btn3 button'>
                <a href='/guesttalk' className='guesttalkBtn'>
                  Guest Talks &#x0003E;
                </a>
              </button>
            </div>

            {/* <p>Best websites for developing companies.</p> */}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
