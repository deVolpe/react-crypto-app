import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../NavBar';
import SearchPanel from '../SearchPanel';

import './App.scss';

const App = () => {
  return (
      <div className="app">
        <Header/>
        <Navbar/>
        <SearchPanel/>
      </div>
  );
};

export default App;
