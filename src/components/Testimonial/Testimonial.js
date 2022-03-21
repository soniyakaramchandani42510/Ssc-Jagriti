import React from 'react'
import '../GuestTalk/GuestTalk'
import './Testimonial.css'
import testimonial1Image from '../../Assets/testimonial1.jpeg'
import testimonial2Image from '../../Assets/testimonial2.jpeg'

function Testimonial() {
  return (
    <>
      <div className='testimonialOuter'>
        <h1>Testimonials</h1>
        <div class='cards'>
          <div class='cards_item'>
            <div class='card'>
              <div class='card_image'>
                <img
                  className='photo'
                  src={testimonial1Image}
                  alt='testimonial'
                />
              </div>
              <div class='card_content card-color1'>
                <h2 class='card_title'>Itishree Behera</h2>
                <h4 class='card_subtitle'>Program Manager, ThinkZone</h4>
                <p class='card_text'>
                  Access to education is an issue we all speak about, and the
                  digital divide during the pandemic shows us the truth. Aarohan
                  is one such student-led initiative of Jagriti that creates
                  awareness about issues like this. It acts as a platform for
                  those working in this field to present their work.
                </p>
              </div>
            </div>
          </div>
          <div class='cards_item'>
            <div class='card'>
              <div class='card_image'>
                <img
                  className='photo'
                  src={testimonial2Image}
                  alt='testimonial'
                />
              </div>
              <div class='card_content card-color2'>
                <h2 class='card_title'>Chhavi Khandelwal</h2>
                <h4 class='card_subtitle'>Co-Founder, Saturday Art Class</h4>
                <p class='card_text'>
                  Art has the power to transform, illuminate, educate, inspire
                  and motivate. I want to thank the team for inviting me as a
                  guest for Aarohan 2021. We discussed about how art could
                  change the character and attitude of a child. I enjoyed being
                  part of this family as I saw the real zest among students.
                </p>
              </div>
            </div>
          </div>

          <div class='cards_item'>
            <div class='card'>
              <div class='card_image'>
                <img
                  className='photo'
                  src='https://picsum.photos/500/300/?image=2'
                  alt='testimonial'
                />
              </div>
              <div class='card_content card-color3'>
                <h2 class='card_title'>Jen Sincero</h2>
                <p class='card_text'>
                  If you’re serious about changing your life, you’ll find a way.
                  If you’re not, you’ll find an excuse. If you’re serious about
                  changing your life, you’ll find a way. If you’re not, you’ll
                  find an excuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
