import React from "react";
import "./index.css";

class RemainingTime extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header_remaining-time-container">
        <p className="header_remaining-time-value">{this.props.time}</p>
        <p>{this.props.subtext}</p>
      </div>
    );
  }
}


export default RemainingTime;
