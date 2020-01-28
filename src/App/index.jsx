import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from '../shared/globalStyles';
import configureStore from '../store';
import Routes from './Routes';
import theme from '../shared/theme';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {  
  render() {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
