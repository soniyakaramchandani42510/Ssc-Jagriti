import React from 'react'
import './Events.css'

function Events() {
  return (
    <>
    <div className="events">
        <span className="competitions">
          Competitions
        </span>
        <span className="guest">
          Guest Talks
        </span>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Quaerat ad iste ipsa omnis molestias, modi sunt iusto nisi
            necessitatibus consequuntur ducimus laborum saepe cumque
             alias unde non expedita molestiae excepturi.
             </p>
        </div>
        <div>
          <div>
            <img id="images" src={require('../Assets/events.png')} alt="" />
          </div>
          <div className='over'>
            <h6 className='overview'>Overview</h6>
            <h6 className='lines'>Timeline</h6>
            <h6 className='contacts'>Contacts</h6>
          </div>
        </div>



    </>
  )
}

export default Events