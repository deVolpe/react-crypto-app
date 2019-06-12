import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Panel from '../Panel';
import Navbar from '../NavBar';
import SearchPanel from '../../containers/SearchPanelContainer';
import DropMenu from '../DropMenu';
import NoContent from '../../pages/NoContent';
import CardsList from '../../containers/CardsListContainer';

import styles from './MainSection.scss';

const MainSection = memo(
  ({ match: { path }, error: { message }, getAllCryptoCards }) => {
    useCallback(() => {
      getAllCryptoCards();
    }, [message]);

    return (
      <section className={styles.Main}>
        <Panel>
          <Navbar />
          <SearchPanel />
          <DropMenu />
        </Panel>
        <Route
          exact
          path={`${path}/cards`}
          render={() => (message ? (
            <NoContent message={message} />
          ) : (
            <main className={styles.container}>
              <CardsList />
            </main>
          ))
          }
        />
      </section>
    );
  },
);

MainSection.defaultProps = {
  match: null,
  getAllCryptoCards: () => {},
};

MainSection.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  getAllCryptoCards: PropTypes.func,
};

export default MainSection;
