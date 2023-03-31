import React from 'react';
import PropTypes from 'prop-types';

import classes from './MissionCard.module.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className={classes['mission-card']}>
        <p data-testid="mission-name" className={classes['mission-name']}>{name}</p>
        <div className={classes['mission-info']}>
          <div className={classes['mission-info--inner']}>
            <p data-testid="mission-year" className={classes['mission-year']}>{year}</p>
            <p data-testid="mission-country" className={classes['mission-country']}>{country}</p>
          </div>
          <p data-testid="mission-destination" className={classes['mission-destination']}>{destination}</p>
        </div>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
