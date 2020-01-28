import React, { Component } from 'react';
import { Icon } from '../index';
import { StyledSocialIcons } from './Styled';

const socials = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/lneedham/',
  },
  {
    name: 'github',
    href: 'https://github.com/LewisN/',
  }
];

/**
 * @class SocialIcons
 * @extends {Component}
 */
class SocialIcons extends Component {
  render() {
    return (
      <StyledSocialIcons>
        {socials.map((social) => (
          <li>
            <Icon
              name={social.name}
              href={social.href}
              color={this.props.color}
            />
          </li>
        ))}
      </StyledSocialIcons>
    );
  }
}

export default SocialIcons;
