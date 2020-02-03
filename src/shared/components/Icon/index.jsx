import React from 'react';
import InlineSVG from 'svg-inline-react';
import linkedinLogo from '../../assets/linkedin';
import githubLogo from '../../assets/github';
import { StyledIcon } from './Styled';

const iconMap = {
  'linkedin': linkedinLogo,
  'github': githubLogo,
};

const Icon = props => (
  <StyledIcon
    icon
    color={props.color}
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <InlineSVG src={iconMap[props.name]} />
  </StyledIcon>
);

export default Icon;
