import React from 'react';

import classes from './Countdown.module.css';

const Countdown = (props) => {
  return (
    <div className={classes.Countdown}>
    <h2>Minutes remaining:</h2>
    <p>{props.intervalMinutes}:{props.intervalSeconds}</p>
    
    </div>
  );
}

export default Countdown;
