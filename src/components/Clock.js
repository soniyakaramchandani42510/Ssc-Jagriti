import React, {Fragment} from 'react';
import "./Clock.css";

const Clock = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
  return <Fragment>
      <div className='my-5 date'>
          <h3 className='text'>MARK THE DATE</h3>
          <br />
          <p className='jagriti'>Jagriti will go live on 16 April 2022.</p>
      </div>
      <section className="timer-container">
          <section className="timer">
              <div className="clock">
                  <section id='days'>
                      <p>{timerDays}</p>
                      <small>Days</small>
                  </section>
                  
                  <section id='hours'>
                      <p>{timerHours}</p>
                      <small>Hours</small>
                  </section>
                  
                  <section id='minutes'>
                      <p>{timerMinutes}</p>
                      <small>Minutes</small>
                  </section>
                  
                  <section id='seconds'>
                      <p>{timerSeconds}</p>
                      <small>Seconds</small>
                  </section>
                  </div>
                  </section>
                  <img id="imgs" src={require('../Assets/timer.png')}  alt="..."/>
          </section>
  </Fragment>
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds:10,
}

export default Clock


