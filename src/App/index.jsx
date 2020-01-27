import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize'
import './Styles';
import configureStore from '../store';
import Routes from './Routes';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {  
  render() {
    return (
      <Provider store={configureStore()}>
        <Normalize />
        <Routes />
      </Provider>
    );
  }
}

export default App;
