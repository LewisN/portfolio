import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav';
import { StyledHeader } from './Styles';
import { Logo } from '../';

/**
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Logo />
        <Nav />
      </StyledHeader>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Header);
