import React, { useState } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";

import "./index.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reps: {
        title: "REPS",
        value: 8,
        total: 12,
      },
      pace: {
        title: "PACE",
        value: 25,
        units: "REPS / MIN",
        subtitle: "Avg 25 - Max 27",
      },
      depth: {
        title: "DEPTH",
        value: 48,
        units: "cm",
        subtitle: "Avg 48cm - Max 50cm",
      },
      heartRate: {
        title: "HEART RATE",
        value: 120,
        units: "BPM",
        subtitle: "Zone 3: Max 50%",
      },
    };
  }

  render() {
    return (
      <div className="app_footer_container flex-general flex-col">
        <Reps {...(this.state.reps || {})} />
        <Pace {...(this.state.pace || {})} />
        <HeartRate {...(this.state.heartRate || {})} />
      </div>
    );
  }
}

export default Footer;
