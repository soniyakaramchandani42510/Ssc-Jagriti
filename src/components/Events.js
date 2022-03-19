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

    {/* main logic */}
    {/* <div className="events">
        <a className="competitions" >
          Competitions
        </a>
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
        <div>
          <div className='row'>
          <div className='col-sm'>
            <img id="images" src={require('../Assets/events.png')} alt="" />
          </div>
          <div className='col-sm tags'>
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
                <h6 id='problem'>View Problem Statement </h6>
              </div>
              <div className="col-sm">
                <h6 id='register'>Register for the event 	&#x0003E;</h6>

              </div>
            </div>
          </div>
          </div>
          </div> */}


      



      {/* template */}
      <div class="card">
  <div class="image">
    <img src="https://cdn.pixabay.com/photo/2019/01/12/16/21/breakfast-3928800_960_720.jpg" alt="img"/>
  </div>
  <div class="subscribe">
    <h2>Get diet and fitness tips in your inbox</h2>
    <p>Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
    <form>
      <input type="email" name="email" id="email" placeholder="Enter your email address" autocomplete="off"/>
      <button type="button">Subscribe</button>
    </form>
  </div>
</div>
      


    </>
  )
}
Events.defaultProps = {
  events : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`

}

export default Events
