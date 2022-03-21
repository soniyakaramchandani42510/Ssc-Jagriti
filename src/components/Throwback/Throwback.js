import React from 'react'
import './Throwback.css'
import collage1Image from '../../Assets/collage1.png'
import collage3Image from '../../Assets/collage2.png'
import collage2Image from '../../Assets/collage3.png'

export default function Throwback() {
  return (
    <div className='throwbackOuter'>
      <div className='text-center my-5'>
        <div className='throwbackInner'>
          <h1>Throwback</h1>
          <p className='px-3 my-3 mx-3 throwbackDescription'>
            Here's the glimpse of the previous editions of Jagriti. Exciting
            events ranging from guest talks to competitions were successfully
            held, inundated with participants from all over India.
          </p>
        </div>
        <div
          id='carouselExampleControls'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={collage1Image} class='d-block w-100' alt='...' />
            </div>
            <div class='carousel-item'>
              <img src={collage2Image} class='d-block w-100' alt='...' />
            </div>
            <div class='carousel-item'>
              <img src={collage3Image} class='d-block w-100' alt='...' />
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
