import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledFooter, StyledFooterInner, StyledFooterInfo } from './Styles';
import { Logo } from '../';
import { SocialIcons } from '../index';

/**
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledFooterInner>
          <Logo color="white" />
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
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Footer);
