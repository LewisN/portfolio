import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Styles.js';

/**
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        Nav
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Nav);
