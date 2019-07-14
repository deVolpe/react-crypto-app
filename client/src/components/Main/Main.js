import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../pages/ErrorBoundary';

import styles from './Main.scss';

const Main = memo(({ error: { message }, children }) => (
  <main className={styles.main}>
    <ErrorBoundary message={message}>{children}</ErrorBoundary>
  </main>
));

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
