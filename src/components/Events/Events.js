import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Events.css'
import { events } from '../../constants'
import EventCard from './EventCard/EventCard'
function Events(props) {
  const { search } = useLocation()
  const isGuestTalk = new URLSearchParams(search)?.get('guestTalks')
  const [currentPage, setCurrentPage] = useState(
    isGuestTalk ? 'guestTalks' : 'competitions'
  )

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
          <button
            className={`competitionsBtn ${
              currentPage === 'competitions' ? 'btnActive' : ''
            }`}
            onClick={() => setCurrentPage('competitions')}
          >
            Competitions
          </button>
          {/* <div href='/guesttalk'> */}
          <div>
            <button
              className={`competitionsBtn ${
                currentPage === 'guestTalks' ? 'btnActive' : ''
              }`}
              onClick={() => setCurrentPage('guestTalks')}
            >
              Guest Talks
              {/* <span>Coming soon!</span> */}
            </button>
          </div>
        </div>
        <p className='para'>
          {currentPage === 'competitions'
            ? `What sets Jagriti Apart from others are the out of the box events and
          problem statements that we provide to the participants. In this
          edition we have events ranging from Jog 2 Donate, an event where you
          jog and donate proportional amounts to an organisation, to Utthan, an
          event where you solve real problems of people living in Bastis.
          Explore our website to know more!`
            : `NGOs are non-profit organizations that work to contribute and uplift the society. Ever wondered how they implement their vision? How did they change over the pandemic? Or, What sets them apart from others? We Present to you Guest talks to answer these questions and many more. 

Our guests are prodigious social entrepreneurs and social workers, here to speak on various social issues and provide deep insight on topics that are relevant for young change makers who want to make the world a better place some day.
`}
        </p>
      </div>
      {currentPage === 'competitions' && (
        <div id='eventCards'>
          <h1>Competitions</h1>
          {events.map((event, index) => (
            <EventCard event={event} cardNumber={index} />
          ))}
        </div>
      )}
      {currentPage === 'guestTalks' && (
        <div id='eventCards'>
          <h1>Guest Talks</h1>
          <div className='guestTalksDescription'>
            More details will be released soon!
          </div>
        </div>
      )}
      {/* template */}
    </div>
  )
}
Events.defaultProps = {
  events: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`,
}

export default Events
