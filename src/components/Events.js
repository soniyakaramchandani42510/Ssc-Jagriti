import React from 'react'
import './Events.css'
import eventPng  from "../assets/events.png"

function Events(props) {
  // const [events,setEvents]=useState();
  function overView() {
    props.setEvents(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`);
  }
  function timeLine() {
    props.setEvents(`kdiwjdoqwkdo`);
  }
  function contacts() {
    props.setEvents(`dndidj`);
  }



  return (
    <>

      {/* main logic */}
      <div className="events">
        <a className="competitions" href="/">Competitions</a>
        <a className="guest" href="/guesttalk">
          Guest Talks
        </a>
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quaerat ad iste ipsa omnis molestias, modi sunt iusto nisi
          necessitatibus consequuntur ducimus laborum saepe cumque
          alias unde non expedita molestiae excepturi.
        </p>
      </div>
      <div>
        <div className="row">
          <div className='col-sm'>
            <img id="images" src={eventPng} alt="error" />
          </div>
          <div className='col-sm tags'>
            <div className="row">
              <div className="col-sm" id="overview" onClick={overView}>
                Overview
              </div>
              <div className="col-sm" id="timeline" onClick={timeLine}>
                Timeline
              </div>
              <div className="col-sm" id="contacts" onClick={contacts}>
                Contacts
              </div>
            </div>
            <div className="row" id="special">
              {props.events}
            </div>
            <div className="row">

              <div className="col-sm">
                <h6 id="problem">View Problem Statement </h6>
              </div>
              <div className="col-sm">
                <h6 id="register">Register for the event 	&#x0003E;</h6>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// Events.defaultProps = {
//   events: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`

// }

export default Events
