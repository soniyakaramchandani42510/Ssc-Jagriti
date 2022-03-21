import React from "react";
import "./Events.css";
import eventImage from "../../Assets/events.png";

function Events(props) {
  function overView() {
    props.setEvents(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`
    );
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
        <a className="competitions">Competitions</a>
        <a className="guest" href="/guesttalk">
          Guest Talks
        </a>
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ad
          iste ipsa omnis molestias, modi sunt iusto nisi necessitatibus
          consequuntur ducimus laborum saepe cumque alias unde non expedita
          molestiae excepturi.
        </p>
      </div>
      <div className="card event-card">
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img id="images" src={require('../../Assets/events.png')} alt=""  />
                </div>
                <div className="card-body event-body">
                    <div className="row event-title card-title">
                      <div className="col-sm" id='overview' onClick={overView}>
                      Overview
                      </div>
                      <div className="col-sm" id='timeline' onClick={timeLine}>
                      Timeline
                      </div>
                      <div className="col-sm" id='contacts' onClick={contacts}>
                      Contacts
                      </div>
                    </div>
                    <div className="dropdown e-dropdown">
                      <div className=" card-title dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Overview
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={overView}>Overview</button>
                        <button className="dropdown-item" type="button" onClick={timeLine}>Timeline</button>
                        <button className="dropdown-item" type="button" onClick={contacts}>Contacts</button>
                      </div>
                    </div>

                    <div className="card-text event-text">{props.events}</div>
                      <div className="row buttons">
                        <div className="col-sm">
                          <a id="problem" href="#" className="btn">View Problem Statement</a>
                        </div>
                        <div  className="col-sm">
                          <a id="register" href="#" className="btn btn-danger">Register</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>

      {/* template */}
    </>
  );
}
Events.defaultProps = {
  events: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`,
};

export default Events;
