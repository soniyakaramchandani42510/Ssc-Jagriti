import React, { useState } from 'react'
import './Events.css'
import eventImage from '../../Assets/events.png'
import background1Image from '../../Assets/background1.png'
import questionBackground from '../../Assets/questionBackground.jpg'
import { events } from '../../constants'
import EventCard from './EventCard/EventCard'
function Events(props) {
  function overView() {
    props.setEvents(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`
    )
  }
  function timeLine() {
    props.setEvents(`kdiwjdoqwkdo`)
  }
  function contacts() {
    props.setEvents(`dndidj`)
  }

  return (
    <div className='eventsOuter'>
      {/* main logic */}
      <div className='events'>
        <div className='eventsButton'>
          <a href='#eventCards'>
            <button className='competitionsBtn'>Competitions</button>
          </a>
          {/* <div href='/guesttalk'> */}
          <div>
            <button disabled className='competitionsBtn'>
              Guest Talks
              {/* <span>Coming soon!</span> */}
            </button>
          </div>
        </div>
        <p className='para'>
          What sets Jagriti Apart from others are the out of the box events and
          problem statements that we provide to the participants. In this
          edition we have events ranging from Jod 2 Donate, an event where you
          jog and donate proportional amounts to an organisation, to Utthan, an
          event where you solve real problems of people living in Bastis.
          Explore our website to know more!
        </p>
      </div>
      <div id='eventCards'>
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>

      {/* template */}
    </div>
  )
}
Events.defaultProps = {
  events: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`,
}

export default Events
