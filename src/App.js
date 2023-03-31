import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

import './App.css';
import classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <section className={`${classes['w-full']} ${classes['bg-space']}`}>
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
