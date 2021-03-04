import React from 'react';
import PropTypes from 'prop-types';
import New from '../New/New.jsx';
import Popular from '../Popular/Popular.jsx';

function withHighlight(Component) {
  function Highlighted(props) {
    const { views } = props;

    if (views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return <Component {...props} />
  }

  return Highlighted;
}

export default withHighlight;
