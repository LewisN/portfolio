import React, { Component } from 'react';
import { StyledLogo } from './Styles';
import logo from '../../assets/logo';
import InlineSVG from 'svg-inline-react';

/**
 * @class Logo
 * @extends {Component}
 */
class Logo extends Component {
  render(props) {
    return(
      <StyledLogo color={this.props.color}>
        <InlineSVG src={logo} />
      </StyledLogo>
    );
  }
}

export default Logo;
