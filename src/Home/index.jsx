import React, { Component, Fragment } from 'react';
import './Styles';
import { Header, ProjectList, Footer, ContactForm, Tagline } from '../shared/components';
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
        <Tagline />
        <ProjectList />
        <ContactForm />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
