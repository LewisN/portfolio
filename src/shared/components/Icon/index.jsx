import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import linkedinLogo from '../../assets/linkedin';
import githubLogo from '../../assets/github';
import { StyledIcon } from './Styled';

const iconMap = {
  'linkedin': linkedinLogo,
  'github': githubLogo,
};

/**
 * @class Icon
 * @extends {Component}
 */
class Icon extends Component {
  render() {
    return (
      <StyledIcon
        icon
        color={this.props.color}
        href={this.props.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <InlineSVG src={iconMap[this.props.name]} />
      </StyledIcon>
    );
  }
}

export default Icon;
