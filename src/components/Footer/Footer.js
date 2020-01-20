import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

/**
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Footer
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });
 
export default connect(mapStateToProps)(Footer);
