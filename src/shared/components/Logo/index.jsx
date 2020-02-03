import React from 'react';
import { StyledLogo } from './Styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo';
import InlineSVG from 'svg-inline-react';

const Logo = props => (
  <Link to='/'>
    <StyledLogo color={props.color} size={props.size}>
      <InlineSVG src={logo} />
    </StyledLogo>
  </Link>
);

export default Logo;
