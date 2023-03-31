import React from 'react';
import PropTypes from 'prop-types';

import classes from './PlanetCard.module.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetSize } = this.props;
    return (
      <div data-testid="planet-card" className={classes['planet-card']}>
        <img src={planetImage} alt={`Planeta ${planetName}`} className={classes['planet-img']} width={planetSize} />
        <p data-testid="planet-name" className={classes['planet-name']}>{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  planetSize: PropTypes.number.isRequired,
};

export default PlanetCard;
