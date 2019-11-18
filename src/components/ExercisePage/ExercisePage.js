import React from "react";
import classes from "./ExercisePage.module.css";
import Countdown from "react-countdown-now";

const ExercisePage = props => {
  let durationSeconds = props.exerciseDuration * 60000;
  let exercises = props.exercises;
  let randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      window.location.reload(false);
    } else {
      // Render a countdown

      return (
        <span className={classes.CountdownRenderer}>
          <h2>Time remaining:</h2>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div className={classes.ExercisePage}>
      {/* <p>Back</p> */}
      <h1>{randomExercise}</h1>

      <Countdown renderer={renderer} date={Date.now() + durationSeconds} />
    </div>
  );
};

export default ExercisePage;
