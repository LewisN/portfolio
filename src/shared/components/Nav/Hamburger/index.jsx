import React from 'react';
import { connect } from 'react-redux';
import { setNavState } from '../../../../actions';
import {
  StyledHamburger,
  HamburgerInner,
  HamburgerLine,
} from './Styles';

const Hamburger = props => (
  <StyledHamburger
    type='button'
    aria-label={props.navIsOpen ? 'Close the navigation' : 'Open the navigation' }
    onClick={() => props.setNavState('TOGGLE')}
    {...props}
  >
    <HamburgerInner>
      <HamburgerLine aria-hidden='true' />
      <HamburgerLine aria-hidden='true' />
      <HamburgerLine aria-hidden='true' />
      <HamburgerLine aria-hidden='true' />
    </HamburgerInner>
  </StyledHamburger>
);

const mapStateToProps = state => ({  navIsOpen: state.navIsOpen });

export default connect(mapStateToProps, { setNavState })(Hamburger);