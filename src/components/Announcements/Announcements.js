import React from "react";
import { announcements } from "../../constants";
import "./Announcements.css";

const Announcements = () => {
  return (
    <div className="announcementsOuter">
      <h1>Announcements</h1>
      {announcements.map((data) => (
        <div className="announcementBox">
          <div className="announcementTop">
            <div
              className="announcementEventName"
              style={{ background: `${data.color || "red"}` }}
            >
              {data.event}
            </div>
            <div className="announcementDate">{data.date}</div>
          </div>
          <div className="announcementHeading">{data.heading}</div>
          <div className="announcementDescription">{data.description}</div>
          <div className="announcementLinks">{data.links?.map(link => <a className="label" href={link.href} target="_blank">{link.label}</a>)}</div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
