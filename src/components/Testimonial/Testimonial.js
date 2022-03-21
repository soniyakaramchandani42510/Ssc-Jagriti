import React from "react";
import "../GuestTalk/GuestTalk";
import "./Testimonial.css";

function Testimonial() {
  return (
    <>
      <div className="testimonialOuter">
        <h1>Testimonials</h1>
        <div class="cards">
          <div class="cards_item">
            <div class="card">
              <div class="card_image">
                <img
                  className="photo"
                  src="https://picsum.photos/500/300/?image=10"
                />
              </div>
              <div class="card_content card-color1">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </div>
          <div class="cards_item">
            <div class="card">
              <div class="card_image">
                <img
                  className="photo"
                  src="https://picsum.photos/500/300/?image=5"
                />
              </div>
              <div class="card_content card-color2">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </div>

          <div class="cards_item">
            <div class="card">
              <div class="card_image">
                <img
                  className="photo"
                  src="https://picsum.photos/500/300/?image=2"
                />
              </div>
              <div class="card_content card-color3">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
