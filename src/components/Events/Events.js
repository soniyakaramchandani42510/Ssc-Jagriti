import React from 'react'
import './Events.css'
import eventImage from '../../Assets/events.png'
import background1Image from '../../Assets/background1.png'
import questionBackground from '../../Assets/questionBackground.jpg'
import { events } from '../../constants'

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
          {/* <a href='/guesttalk'>
            <button className='guestTalkBtn'>Guest Talks</button>
          </a> */}
        </div>
        <p className='para'>
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ad
          iste ipsa omnis molestias, modi sunt iusto nisi necessitatibus
          consequuntur ducimus laborum saepe cumque alias unde non expedita
          molestiae excepturi. */}
        </p>
      </div>
      <div id='eventCards'>
        {events.map((event) => (
          <div className='eventCard'>
            <img src={background1Image} className='eventCardImg' />
            <div className='card event-card'>
              <div className='eventCardOuterMax'>
                <div className='eventCardOuter'>
                  <div>
                    <img id='images' src={questionBackground} alt='' />
                  </div>
                  <div className='card-body event-body'>
                    <div className='cardTitle'>{event.name}</div>
                    <div className='row event-title card-title cardTitles'>
                      <div id='overview' onClick={overView}>
                        Overview
                      </div>
                      <div id='timeline' onClick={timeLine}>
                        Timeline
                      </div>
                      <div id='contacts' onClick={contacts}>
                        Contacts
                      </div>
                    </div>
                    {/* <div className='dropdown e-dropdown'>
                    <div
                      className=' card-title dropdown-toggle'
                      type='button'
                      id='dropdownMenu2'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Overview
                    </div>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenu2'
                    >
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={overView}
                      >
                        Overview
                      </button>
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={timeLine}
                      >
                        Timeline
                      </button>
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={contacts}
                      >
                        Contacts
                      </button>
                    </div>
                  </div> */}

                    <div className='card-text event-text cardText'>
                      {event.content}
                    </div>
                    <div className='eventButtons'>
                      <button>Registration: Opens soon!</button>
                      {/* <div className='col-sm'>
                      <a id='problem' href='#' className='btn'>
                        View Problem Statement
                      </a>
                    </div>
                    <div className='col-sm'>
                      <a id='register' href='#' className='btn btn-danger'>
                        Register
                      </a>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
