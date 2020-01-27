import React, { Component, Fragment } from 'react';
import './Styles';
import { Header, ProjectList, Footer, ContactForm } from '../shared/components';
import { connect } from 'react-redux';

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        Main Tagline
        <ProjectList />
        <ContactForm />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
