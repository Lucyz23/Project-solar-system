import React from 'react';

import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <h1 className={classes.headline}>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
