import React, { Component, Fragment } from 'react';
import { Header, ProjectList, Footer, ContactForm, Tagline, SocialIcons } from '../shared/components';
import { connect } from 'react-redux';
import { SocialIconsContainer } from './Styles';

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
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
        <ProjectList />
        <ContactForm />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
