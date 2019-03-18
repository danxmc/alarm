import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ActionList from './components/ActionList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ActionList />
      </div>
    );
  }
}

export default App;
