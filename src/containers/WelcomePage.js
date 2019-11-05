import React, { Component } from "react";

import classes from "./WelcomePage.module.css";

import Heading from "../components/Heading/Heading";
import Exercises from "../components/Exercises/Exercises";
import Timers from "../components/Timers/Timers";
import ExercisePage from "../components/ExercisePage/ExercisePage";

class WelcomePage extends Component {
  state = {
    term: "",
    exercises: ["jumping jacks", "forearm plank hold", "cat-cow", "boat pose"],
    duration: "1",
    intervalMinutes: 20,
    showCountdown: false,
    showExerciseCountdown: false
  };

  onExerciseChange = event => {
    this.setState({ term: event.target.value });
  };

  onDurationChange = event => {
    this.setState({ duration: event.target.value });
  };

  onIntervalChange = event => {
    this.setState({ intervalMinutes: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      exercises: [...this.state.exercises, this.state.term]
    });
  };

  onClick = index => {
    const exercises = [...this.state.exercises];

    exercises.splice(index, 1);

    this.setState({ exercises: exercises });
  };

  onStartButtonClick = () => {
    this.setState({ showCountdown: true });
  };

  onExerciseStartButtonClick = () => {
    this.setState({ showExerciseCountdown: true });
  };

  render() {
    let exerciseList = this.state.exercises.map((ex, index) => {
      return (
        <Exercises
          exercise={ex}
          key={index}
          clicked={() => this.onClick(index)}
        />
      );
    });

    let countdownSeconds = this.state.intervalMinutes * 60000;

    const randomExercise = this.state.exercises[
      Math.floor(Math.random() * this.state.exercises.length)
    ];

    // Time function using Countdown package
    const Completionist = () => (
      <ExercisePage
        randomExercise={randomExercise}
        exerciseDuration={this.state.duration}
        showExerciseCountdown={this.state.showExerciseCountdown}
        clicked={this.onExerciseStartButtonClick}
      />
    );

    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
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
      <div className={classes.WelcomePage}>
        <Heading />
        <div className={classes.ListAndTimer}>
          <div className={classes.ExerciseList}>
            <form onSubmit={this.onSubmit} className={classes.Form}>
              <input
                value={this.state.term}
                onChange={this.onExerciseChange}
                placeholder="Add exercises :)"
              />
              <button>+</button>
            </form>
            <div className={classes.Exercises}>{exerciseList}</div>
          </div>
          <Timers
            duration={this.state.duration}
            interval={this.state.intervalMinutes}
            durationChanged={this.onDurationChange}
            intervalChanged={this.onIntervalChange}
            intervalMinutes={this.state.intervalMinutes}
            intervalSeconds={this.state.intervalSeconds}
            clicked={this.onStartButtonClick}
            showCountdown={this.state.showCountdown}
            date={Date.now() + countdownSeconds}
            renderer={renderer}
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
