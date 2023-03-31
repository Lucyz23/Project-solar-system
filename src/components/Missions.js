import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

import classes from './Missions.module.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className={classes.missions}>
        <Title headline="Missões" />

        <div className={classes['missions-cards']}>
          {
            missions.map((my, index) => (
              <MissionCard
                key={index}
                name={my.name}
                year={my.year}
                country={my.country}
                destination={my.destination}
              />)
            )
          }
        </div>
      </div>
    );
  }
}
export default Missions;
