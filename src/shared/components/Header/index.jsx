import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav';
import './Styles';

/**
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  render() {
    return (
      <div className="Header">
        Header
        <Nav />
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Header);
