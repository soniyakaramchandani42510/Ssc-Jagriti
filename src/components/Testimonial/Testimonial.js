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
                  alt="testimonial"
                />
              </div>
              <div class="card_content card-color1">
                <h2 class="card_title">Toni Morrison</h2>
                <p class="card_text">
                  If there’s a book that you want to read, but it hasn’t been
                  written yet, then you must write it. If there’s a book that
                  you want to read, but it hasn’t been written yet, then you
                  must write it.
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
                  alt="testimonial"
                />
              </div>
              <div class="card_content card-color2">
                <h2 class="card_title">Theodore Roosevelt</h2>
                <p class="card_text">
                  There is nothing brilliant or outstanding in my record, except
                  perhaps this one thing. I do the things I believe ought to be
                  done. And when I make up my mind to do a thing, I act.
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
                  alt="testimonial"
                />
              </div>
              <div class="card_content card-color3">
                <h2 class="card_title">Jen Sincero</h2>
                <p class="card_text">
                  If you’re serious about changing your life, you’ll find a way.
                  If you’re not, you’ll find an excuse. If you’re serious about changing your life, you’ll find a way. If you’re not, you’ll find an excuse.
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
