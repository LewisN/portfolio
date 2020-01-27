import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Styles';
import { NavIcon, NavIconInner } from './Styles';

/**
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  render() {
    return (
      <NavIcon
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => this.props.dispatch({ type: 'TOGGLE_NAV' })}
        open={this.props.open}
      >
        <NavIconInner />
        <NavIconInner />
        <NavIconInner />
        <NavIconInner />
      </NavIcon>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ 
  open: state.open,
});
 
export default connect(mapStateToProps)(Nav);
