import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../NavBar';
import SearchPanel from '../SearchPanel';
import SideBar from '../SideBar';

import './MainSection.scss';

export default class MainSection extends Component {
  static defaultProps = {
    children: null
  };
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <section className="Main">
        <Navbar />
        <SearchPanel />
        {/* <SideBar/> */}
        {children}
      </section>
    );
  }
}
