import React from 'react';

import classes from './Timers.module.css';

const Timers = (props) => {
  return (
    <div className={classes.Timers}>
      <form>
      Exercise Duration:
      <br/>
      <input value={props.duration} type='number' name="duration" onChange={props.durationChanged} required/>
      min

      <br/>
      <br/>
      Interval Length:
      <br/>
      <input value={props.interval} type='number' name="interval" onChange={props.intervalChanged} required/>
      min
      <br/>
      <button>Go!</button>
      </form>
    </div>
  );
}

export default Timers;
