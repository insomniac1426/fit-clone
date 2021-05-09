import React, { useState } from "react";
import ExerciseProgress from "./components/ExerciseProgress";
import RemainingTime from "./components/RemainingTime";

import "./index.css";

const Header = () => {
  const [exerciseData, setExerciseData] = useState({
    exercisesMeta: [
      {
        imageUrl: "",
        type: "cardio",
        setData: [
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
        setData: [
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
        setData: [
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
        setData: [
          {
            size: "large",
            reps: 1,
            complete: false,
            repsComplete: 0,
          },
        ],
      },
    ],
  });

  return (
    <div className="app_header_container flex-general">
      <div className="flex-general jus-st">
        <ExerciseProgress exercises={exerciseData.exercisesMeta} />
      </div>

      <RemainingTime time={"12:30"} subtext="REMAINING" />
    </div>
  );
};

export default Header;
