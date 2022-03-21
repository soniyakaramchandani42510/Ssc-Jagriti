import React from 'react'
import './Events.css'

function Events(props) {
  function overView(){
    props.setEvents(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`);
  }
  function timeLine(){
    props.setEvents(`kdiwjdoqwkdo`);
  }
  function contacts(){
    props.setEvents(`dndidj`);
  }


  return (
    <>
    <div className="events">
        <span className="competitions">
          Competitions
        </span>
        <a className="guest" href="/guesttalk">
          Guest Talks
        </a>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Quaerat ad iste ipsa omnis molestias, modi sunt iusto nisi
            necessitatibus consequuntur ducimus laborum saepe cumque
             alias unde non expedita molestiae excepturi.
             </p>
        </div>

        <div className='event_details'>
          <div className='row kk'>
          <div className='col-lg col-md-4 col-sm-4'>
            <img id="images" src={require('../Assets/events.png')} alt=""  />
          </div>
          <div className='col-lg offset-sm-4 col-sm offset-md-2 col-md-6 align-self-end  tags'>
            <div className="row">
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
            <div className="row" id='special'>
              {props.events}
            </div>
            <div className="row">
              <div className="col-sm">
                <a href="#" class="btn btn-primary">View PS</a>
              </div>
              <div className="col-sm">
                <a href="#" class="btn btn-primary">Register</a>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div>
            <div className="card">
              <div className="row no-gutters">
                    <div className="col-auto">
                        <img src={require('../Assets/events.png')} alt="" />
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Description</p>
                            <a href="#" className="btn btn-primary">BUTTON</a>
                        </div>
                    </div>
                </div>
                <div className="card-footer w-100 text-muted">
                    Footer stating cats are CUTE little animals
                </div>
          </div>
          </div>




    </>
  )
}
Events.defaultProps = {
  events : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`

}

export default Events
/*<div>
  <div className="card" style="max-width: 500px;">
      <div className="row no-gutters">
          <div className="col-sm-5" style="background: #868e96;">
              <img src={require('../Assets/events.png')} alt="" />
          </div>
          <div className="col-sm-7">
              <div className="card-body">
                  <h5 className="card-title">Alice Liddel</h5>
                  <p className="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                  <a href="#" className="btn btn-primary stretched-link">View Profile</a>
              </div>
          </div>
      </div>
  </div>
  */
