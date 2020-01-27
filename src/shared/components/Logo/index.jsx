import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from './Styles';

/**
 * @class Logo
 * @extends {Component}
 */
class Logo extends Component {
  render() {
    return(
      <Image>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="logo" x="0px" y="0px" viewBox="0 0 99.2 111.5">
          <path d="M53.2 95h-12V22h12V95zM84.2 83h-31v12h31V83zM31.2 95h-11V0h11V95zM75.2 0h-44v13h44V0zM75.2 13h-12v61h12V13zM84.2 62h-9v12h9V62z"></path>
          <polyline points="0.3 108 99.2 104 99.2 112 0.6 108 "></polyline>
        </svg>
      </Image>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Logo);
