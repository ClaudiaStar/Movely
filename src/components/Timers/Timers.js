import React from 'react';

import classes from './Timers.module.css';

const Timers = (props) => {
  return (
    <div className={classes.Timers}>
      <form>
      Exercise Duration:
      <br/>
      <input type="num" name="duration" placeholder="2"/>
      min

      <br/>
      <br/>
      Interval Length:
      <br/>
      <input type="num" name="interval" placeholder="20"/>
      min

      </form>
    </div>
  );
}

export default Timers;
