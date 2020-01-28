import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Overlay, StyledNav } from './Styles';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Work',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/',
  },
];

/**
 * @class Hamburger
 * @extends {Component}
 */
class FullScreenNav extends Component {
  render() {
    return (
      <Overlay navIsOpen={this.props.navIsOpen}>
        <StyledNav role="navigation">
          <ul role="menubar" aria-hidden="false">
            {navLinks.map((link) => 
              <li key={link.name} role="menuitem">
                <a href={link.path}>
                  {link.name}
                </a>
              </li>
            )}
          </ul>
        </StyledNav>
      </Overlay>
    );
  }
}


const mapStateToProps = state => ({  navIsOpen: state.navIsOpen });
 
export default connect(mapStateToProps)(FullScreenNav);