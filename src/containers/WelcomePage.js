import React, { Component } from 'react';

import classes from './WelcomePage.module.css';

import Heading from '../components/Heading/Heading';
import Exercises from '../components/Exercises/Exercises';
import Timers from '../components/Timers/Timers';
import Countdown from '../components/Countdown/Countdown';

class WelcomePage extends Component {
  state = {
    term: '',
    exercises: ['jumping jacks', 'forearm plank hold', 'cat-cow', 'boat pose'],
    duration: '1',
    intervalSeconds: '00',
    intervalMinutes: '20'
  };

  // secondsRemaining;


  onExerciseChange = (event) => {
    this.setState({term: event.target.value});
  }

  onDurationChange = (event) => {
    this.setState({duration: event.target.value});
  }

  onIntervalChange = (event) => {
    this.setState({intervalMinutes: event.target.value});
  }

  // tick() {
  //   var min = Math.floor(this.secondsRemaining / 60);
  // }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      exercises: [...this.state.exercises, this.state.term]
    })
  }


  onClick = (index) => {
   const exercises = [...this.state.exercises];

   exercises.splice(index, 1);

   this.setState({exercises: exercises});

  }

  render() {

    let exerciseList = this.state.exercises.map((ex, index)=>{
      return <Exercises
        exercise={ex}
        key={index}
        clicked={()=>this.onClick(index)}

      />
    })

    return (
      <div className={classes.WelcomePage}>
      <Heading />
      <div className={classes.ListAndTimer}>
      <div className={classes.ExerciseList}>
      <form onSubmit={this.onSubmit} className={classes.Form}>
      <input value={this.state.term} onChange={this.onExerciseChange} placeholder='Add exercises :)' />
      <button>+</button>
      </form>
      <div className={classes.Exercises}>
      {exerciseList}
      </div>
      </div>
      <Timers duration={this.state.duration}
        interval={this.state.intervalMinutes}
        durationChanged={this.onDurationChange}
        intervalChanged={this.onIntervalChange}/>
      </div>
      <Countdown
        intervalMinutes={this.state.intervalMinutes}
        intervalSeconds={this.state.intervalSeconds}/>
      </div>
    )
  }
}

export default WelcomePage;
