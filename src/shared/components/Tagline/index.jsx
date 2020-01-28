import React, { Component } from 'react';
import { StyledTagline } from './Styles';

/**
 * @class Tagline
 * @extends {Component}
 */
class Tagline extends Component {
  render() {
    return (
      <StyledTagline>
        Hi! I'm <em>Lewis Needham</em>, a front-end developer at conversion rate optimization agency <a class="obvious-link" href="http://www.userconversion.com"><em>User Conversion</em></a>.
      </StyledTagline>
    );
  }
}

export default Tagline;
