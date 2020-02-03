import React from 'react';
import Nav from '../Nav';
import { Logo } from '../';
import {
  StyledHeader,
  StyledHeaderInner,
} from './Styles';

const Header = () => (
  <StyledHeader>
    <StyledHeaderInner>
      <div>
        <Logo size="large" />
      </div>
      <div>
        <Nav />
      </div>
    </StyledHeaderInner>
  </StyledHeader>
);
 
export default Header;
