import React, { useState } from "react";
import ExerciseProgress from "./components/ExerciseProgress";
import Time from "./components/Time";
import { FlexBox } from "../../UI/atoms/FlexBox";
import { HeaderContainer } from "./styles";

const Header = () => {
  const [exerciseData, setExerciseData] = useState(exerciseDummyData);

  return (
    <HeaderContainer width="100%" height="110px">
      <FlexBox width="100%" height="100%" alignItems="center" justifyContent="space-between">
        <ExerciseProgress exercises={exerciseData.exercises} />
        <button onClick={() => setNextInProgress({ exerciseData, setExerciseData })}>
          Click Me
        </button>
        <Time />
      </FlexBox>
    </HeaderContainer>
  );
};

const setNextInProgress = ({ exerciseData, setExerciseData }) => {
  const exercises = exerciseData.exercises;
  const onGoingExercise = exercises.find((exercise) => exercise.inProgress);
  const indexOfOngoingExercise = exercises.indexOf(onGoingExercise);
  const nextExercise = (indexOfOngoingExercise + 1) % exercises.length;
  setExerciseData((data) => ({
    ...data,
    exercises: exercises.map((exercise, index) => {
      if (index === indexOfOngoingExercise) {
        return {
          ...exercise,
          inProgress: false,
        };
      } else if (index === nextExercise) {
        return {
          ...exercise,
          inProgress: true,
        };
      }
      return exercise;
    }),
  }));
};

const exerciseDummyData = {
  exercises: [
    {
      imageUrl: "",
      type: "cardio",
      name: "Running",
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
      name: "Push Ups",
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
      name: "Jumping Jacks",
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
      name: "Squats",
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

export default Header;
