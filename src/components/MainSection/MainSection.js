import React, { PureComponent, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Panel from '../Panel';
import Spinner from '../Spinner';
import Navbar from '../NavBar';
import SearchPanel from '../../containers/SearchPanelContainer';
import DropMenu from '../DropMenu';
import MenuSVG from '../MenuSVG';

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
  };

  render() {
    const { match: { path } } = this.props;
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
          render={() => (
            <Suspense fallback={<Spinner />}>
              <div className={styles.container}>
                <CardsList />
              </div>
            </Suspense>
          )}
        />
      </section>
    );
  }
}
