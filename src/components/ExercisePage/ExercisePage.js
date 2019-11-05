import React from "react";
import classes from "./ExercisePage.module.css";
import Countdown from "react-countdown-now";

const ExercisePage = props => {
  let durationSeconds = props.exerciseDuration * 60000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return window.location.reload();
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
      <h1>{props.randomExercise}</h1>

      {props.showExerciseCountdown ? null : (
        <input type="button" value="Let's Go!" onClick={props.clicked} />
      )}
      {props.showExerciseCountdown ? (
        <Countdown renderer={renderer} date={Date.now() + durationSeconds} />
      ) : null}
    </div>
  );
};

export default ExercisePage;
