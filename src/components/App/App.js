import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addArticle } from '../../actions/index';
import logo from '../../images/logo.svg';
import Header from '../Header/Header';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  addArticle = (event) => {
    this.props.addArticle();
  }
  
  render() {
    return (
      <div className="App">
        <Header />

        <img src={logo} className="App-logo" alt="logo" />
        App
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
/* 
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  addArticle: () => dispatch(addArticle())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
