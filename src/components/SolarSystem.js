import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

import classes from './SolarSystem.module.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />

        <div className={classes['planet-container']} data-testid="solar-system">
          <div className={classes['line']} />
          <div className={classes.planets}>
            {planets.map((ty, index) => (
              <PlanetCard
                key={index}
                planetName={ty.name}
                planetImage={ty.image}
                planetSize={ty.size}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default SolarSystem;
