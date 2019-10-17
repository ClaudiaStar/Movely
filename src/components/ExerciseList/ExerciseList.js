import React from 'react';

import classes from './ExerciseList.module.css';

const ExerciseList = (props) => {
  return (
    <div className={classes.ExerciseList}>
      {
        props.exercises.map((exercise, index) =>
          <div className={classes.Exercise} key={exercise.toString()} onClick={props.clicked} index={index}>{exercise}</div>
        )
      }
    </div>
  );
}

export default ExerciseList;
