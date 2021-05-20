import React, { useState } from "react";
import ExerciseProgress from "./components/ExerciseProgress";
import RemainingTime from "./components/RemainingTime";

import "./index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          imageUrl: "",
          type: "cardio",
          perSetData: [
            {
              size: "medium",
              reps: 1,
              complete: true,
            },
          ],
        },
        {
          imageUrl: "",
          type: "weight-training",
          perSetData: [
            {
              size: "medium",
              reps: 1,
              complete: true,
            },
            {
              size: "medium",
              reps: 1,
              complete: true,
            },
          ],
        },
        {
          imageUrl: "",
          inProgress: true,
          type: "weight-training",
          perSetData: [
            {
              size: "medium",
              reps: 10,
              complete: true,
            },
            {
              size: "medium",
              reps: 10,
              complete: false,
              repsComplete: 6,
            },
          ],
        },
        {
          imageUrl: "",
          type: "cardio",
          perSetData: [
            {
              size: "large",
              reps: 1,
              complete: false,
              repsComplete: 0,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
    <div className="app_header_container flex-general">
      <div className="flex-general jus-st">
        <ExerciseProgress exercises={this.state.exercises} />
      </div>

      <RemainingTime time={"12:30"} subtext="REMAINING" />
    </div>
  );
  }
}

export default Header;
