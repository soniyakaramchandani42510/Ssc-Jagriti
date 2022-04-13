import React from "react";
import "./Timeline.css";
import jagritiScheduleImage from "../../Assets/Jagriti_Schedule.png";

const Timeline = () => {
  return (
    <div className="timelineOuter">
      <div className="timelineBox">
        <img src={jagritiScheduleImage} alt="Jagriti Schedule" />
      </div>
    </div>
  );
};

export default Timeline;
