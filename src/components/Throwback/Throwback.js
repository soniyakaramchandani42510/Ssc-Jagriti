import React from "react";
import "./Throwback.css";
import natureImage from "../../Assets/nature.jpg";
import naturesImage from "../../Assets/natures.jpeg";

export default function Throwback() {
  return (
    <>
      <div className="text-center my-5">
        <h1 class="text-decoration-underline">THROWBACK</h1>
        <p className="px-3 my-3 mx-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam unde,
          iure magnam corporis repellat iste, amet nostrum expedita possimus,
          veritatis error sed ea? Itaque, quam veritatis facilis ipsam velit
          tempore.
        </p>

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={natureImage}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={naturesImage}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={natureImage}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
