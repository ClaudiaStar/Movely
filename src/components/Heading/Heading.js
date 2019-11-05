import React from "react";

import classes from "./Heading.module.css";

import Logo from "../Logo/Logo";

const Heading = () => {
  let current_hour = new Date().getHours();
  let greeting = "";
  if (current_hour < 12) {
    greeting = "Good Morning!";
  } else {
    greeting = "Welcome back!";
  }

  // let d = new Date();
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];
  // let weekday = days[d.getDay()];

  return (
    <div className={classes.Heading}>
      <Logo />
      <div>
        <h1 className={classes.Greeting}>{greeting}</h1>
        {/* <h2 className={classes.Weekday}>On {weekday}s we move. </h2> */}
      </div>
    </div>
  );
};

export default Heading;
