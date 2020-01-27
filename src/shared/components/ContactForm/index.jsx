import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Styles';

/**
 * @class ContactForm
 * @extends {Component}
 */
class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        ContactForm
      </div>
    );
  }
}

/* 
 * mapStateToProps
 */
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(ContactForm);
