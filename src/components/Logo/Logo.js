import React from 'react';

import movelyLogo from '../../assets/Images/Logo.png';

import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={movelyLogo} alt="movelyLogo" />
    </div>
  );
}

export default Logo;
