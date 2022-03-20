import React from "react";
import "../Navbar/Navbar.css";
import "./Home.css";
import homeImage from "../../Assets/homeimg.png";

function Home() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero-content">
            <div className="homeimgContainer">
              <img className="homeimg" src={homeImage} />
            </div>
            {/* <h1 className="hero-heading">Welcome to Jagriti.</h1> */}
            <p className="paras">
              Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur
              adipisicing elit. Odit, id
            </p>
            <p className="paras">Lorem ipsum dolor sit amet.</p>

            <div class="box">
              <button class="btn1 btn2 button">
                <a href="/events">Explore Events &#x0003E;</a>
              </button>
              <button class="btn1 btn3 button">Workshops &#x0003E;</button>
            </div>

            {/* <p>Best websites for developing companies.</p> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
