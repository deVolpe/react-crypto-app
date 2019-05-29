import React, { PureComponent, lazy, Suspense, memo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Panel from '../Panel';
import Spinner from '../Spinner';
import Navbar from '../NavBar';
import SearchPanel from '../../containers/SearchPanelContainer';
import DropMenu from '../DropMenu';
import NoContent from '../../pages/NoContent';

import styles from './MainSection.scss';

const CardsList = lazy(() => import('../../containers/CardsListContainer'));

const MainSection = memo(({ match: { path }, error: { message } }) => (
  <section className={styles.Main}>
    <Panel>
      <Navbar />
      <SearchPanel />
      <DropMenu />
    </Panel>
    <Route
      exact
      path={`${path}/cards`}
      render={() =>
        message ? (
          <NoContent message={message} />
        ) : (
          <main className={styles.container}>
            <Suspense fallback={<Spinner />}>
              <CardsList />
            </Suspense>
          </main>
        )
      }
    />
  </section>
));

MainSection.defaultProps = {
  match: null
};

MainSection.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  }),
  error: PropTypes.shape({
    message: PropTypes.string
  }).isRequired
};

export default MainSection;
