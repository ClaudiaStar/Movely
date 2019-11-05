import React from "react";
import Countdown from "react-countdown-now";

import classes from "./Timers.module.css";

const Timers = props => {
  return (
    <div className={classes.Timers}>
      <form>
        Exercise Duration:
        <br />
        <input
          value={props.duration}
          type="number"
          name="duration"
          onChange={props.durationChanged}
          required
        />
        min
        <br />
        <br />
        Interval Length:
        <br />
        <input
          value={props.interval}
          type="number"
          name="interval"
          onChange={props.intervalChanged}
          required
        />
        min
        <br />
        {props.showCountdown ? null : (
          <input type="button" value="Start timer!" onClick={props.clicked} />
        )}
        {props.showCountdown ? (
          <Countdown
            renderer={props.renderer}
            date={props.date}
            // zeroPadTime={2}
          />
        ) : null}
      </form>
    </div>
  );
};

export default Timers;
