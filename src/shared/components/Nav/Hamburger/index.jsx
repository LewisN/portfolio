import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavIcon, NavIconInner } from './Styles';

/**
 * @class Hamburger
 * @extends {Component}
 */
class Hamburger extends Component {
  render() {
    return (
      <NavIcon
        type="button"
        aria-label="Open the menu"
        onClick={() => this.props.dispatch({ type: 'TOGGLE_NAV' })}
        navIsOpen={this.props.navIsOpen}
      >
        <NavIconInner aria-hidden="true" />
        <NavIconInner aria-hidden="true" />
        <NavIconInner aria-hidden="true" />
        <NavIconInner aria-hidden="true" />
      </NavIcon>
    );
  }
}


const mapStateToProps = state => ({  navIsOpen: state.navIsOpen });
 
export default connect(mapStateToProps)(Hamburger);