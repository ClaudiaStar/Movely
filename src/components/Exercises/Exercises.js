import React from 'react';

import classes from './Exercises.module.css';

const Exercises = (props) => {
  return (
    <div className={classes.Exercises}>
          <div className={classes.Exercise} onClick={props.clicked}>{props.exercise}</div>      
    </div>
  );
}

export default Exercises;
