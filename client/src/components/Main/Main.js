import React, { memo } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import NoContent from '../../pages/NoContent';

import styles from './Main.scss';

const Main = memo(({ error: { message }, children }) => {
  const outcome = !isEmpty(message) ? <NoContent message={message} /> : children;
  return (
    <main className={styles.main}>
      {outcome}
    </main>
  );
});

Main.defaultProps = {
  children: null,
};

Main.propTypes = {
  children: PropTypes.element,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default Main;
