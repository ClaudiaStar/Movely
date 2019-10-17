import React, { Component } from 'react';

import classes from './WelcomePage.module.css';

import Heading from '../components/Heading/Heading';
import ExerciseList from '../components/ExerciseList/ExerciseList';
// import Timers from '../components/Timers/Timers';

class WelcomePage extends Component {
  state = {
    term: '',
    exercises: ['jumping jacks', 'forearm plank hold', 'cat-cow']
  };


  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      exercises: [...this.state.exercises, this.state.term]
    })
  }


  onClick = (event, index) => {

  console.log(index);
  console.log(event.currentTarget);
   const exercises = [...this.state.exercises];

   exercises.splice(index, 1);

   this.setState({exercises: exercises});

  }




  render() {


    return (
      <div className={classes.WelcomePage}>
      <Heading />
      <div className={classes.ExerciseList}>
      <form onSubmit={this.onSubmit} className={classes.Form}>
      <input value={this.state.term} onChange={this.onChange} placeholder='Add exercises :)' />
      <button>+</button>
      </form>
      <ExerciseList clicked={this.onClick} exercises={this.state.exercises} />
      </div>
      {/*<Timers />*/}
      submit button
      </div>
    )
  }
}

export default WelcomePage;
