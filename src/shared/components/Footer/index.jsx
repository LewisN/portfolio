import React from 'react';
import { StyledFooter, StyledFooterInner, StyledFooterInfo } from './Styles';
import { Logo } from '../';
import { SocialIcons } from '../index';

const Footer = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Logo color="white" size="large" />
      <StyledFooterInfo>
        <div>© Lewis Needham 2020</div>
        <div>
          <a href="mailto:hello@lewisneedham.co.uk" target="_top">hello@lewisneedham.co.uk</a>
        </div>
        <SocialIcons color="white" />
      </StyledFooterInfo>
    </StyledFooterInner>
  </StyledFooter>
);
 
export default Footer;
