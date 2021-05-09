import React from "react";
import "./index.css";

const RemainingTime = ({ time, subtext }) => {
  return (
    <div className="header_remaining-time-contianer">
      <p className="header_remaining-time-value">{time}</p>
      <p>{subtext}</p>
    </div>
  );
};

export default RemainingTime;
