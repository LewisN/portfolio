import React from 'react';
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

const SocialIcons = props => (
  <StyledSocialIcons>
    {socials.map((social) => (
      <li key={social.name}>
        <Icon
          name={social.name}
          href={social.href}
          color={props.color}
        />
      </li>
    ))}
  </StyledSocialIcons>
);

export default SocialIcons;
