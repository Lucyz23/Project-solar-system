import PropTypes from 'prop-types';
import React from 'react';

import classes from './Title.module.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className={classes.headline}>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
