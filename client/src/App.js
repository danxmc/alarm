import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ActionList from './components/ActionList';
import ActionModal from './components/ActionModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ActionModal />
            <ActionList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
