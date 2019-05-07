import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navbar from '../NavBar';
import SearchPanel from '../SearchPanel';
import SideBar from '../SideBar';

import styles from './MainSection.scss';

const CardsList = lazy(() => import('../../containers/CardsListContainer'));

export default class MainSection extends Component {
  static defaultProps = {
    match: null,
    history: null
  };
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    auth: PropTypes.object.isRequired,
    cancel: PropTypes.func
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/auth/login');
    }
  }

  componentWillUnmount() {
    this.props.cancel();
  }

  render() {
    const { path } = this.props.match;
    return (
      <section className={styles.Main}>
        <Navbar />
        <SearchPanel />
        <SideBar />
        <Route
          exact
          path={`${path}/cards`}
          render={() => {
            return (
              <Suspense fallback={<div />}>
                <CardsList />
              </Suspense>
            );
          }}
        />
      </section>
    );
  }
}
