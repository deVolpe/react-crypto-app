import React, { Component } from 'react';

import Navbar from '../NavBar';
import SearchPanel from '../SearchPanel';
import SideBar from '../SideBar';


import './MainSection.scss';

export default class MainSection extends Component {


  render() {
    return (
      <section className="Main">
        <Navbar/>
        <SearchPanel/>
        {/* <SideBar/> */}
      </section>
    );
  }
}
