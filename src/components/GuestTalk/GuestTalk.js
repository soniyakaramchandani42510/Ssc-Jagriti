import React from "react";
import "./guesttalk.css";

import poster1Image from "../../Assets/Poster1.jpeg";
import poster2Image from "../../Assets/Poster2.jpeg";
import poster3Image from "../../Assets/Poster3.jpeg";

function GuestTalk() {
  return (
    <div className="guestTalksOuter">
      <div className="guestTalksInner">
        <img src={poster1Image} alt="Guest Talk Poster 1" />
      </div>
      <div className="guestTalksInner">
        <img src={poster2Image} alt="Guest Talk Poster 2" />
      </div>
      <div className="guestTalksInner">
        <img src={poster3Image} alt="Guest Talk Poster 3" />
      </div>
    </div>
  );
}

export default GuestTalk;
