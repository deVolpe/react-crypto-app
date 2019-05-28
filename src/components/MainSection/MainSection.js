import React, { PureComponent, lazy, Suspense } from 'react';
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

export default class MainSection extends PureComponent {
  static defaultProps = {
    match: null,
  };

  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string,
    }),
    error: PropTypes.shape({
      message: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {
      match: { path },
      error: { message },
    } = this.props;
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
            <div className={styles.container}>
              <Suspense fallback={<Spinner />}>
                <CardsList />
              </Suspense>
            </div>
          ))
          }
        />
      </section>
    );
  }
}
