import React, { Fragment } from "react";
import timerImage from "../../Assets/timer.png";
import "./Clock.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="clockOuter">
      <div className="clockLeft">
        <h3 className="text">Mark The Date</h3>
        <p className="jagriti">Jagriti will go live on 15 April 2022.</p>
        <div className="timerContainer">
          <div className="days timerBox">
            <p>{timerDays < 10 ? "0" + timerDays : timerDays}</p>
            <small>Days</small>
          </div>
          <div className="hours timerBox">
            <p>{timerHours < 10 ? "0" + timerHours : timerHours}</p>
            <small>Hours</small>
          </div>
          <div className="minutes timerBox">
            <p>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</p>
            <small>Minutes</small>
          </div>
          <div className="seconds timerBox">
            <p>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
            <small>Seconds</small>
          </div>
        </div>
      </div>
      <div className="clockRight">
        <img src={timerImage} alt="..." />
      </div>
    </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
