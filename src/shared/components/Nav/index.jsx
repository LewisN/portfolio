import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import FullScreenNav from './FullScreenNav';

const $root = document.getElementById('root');

/**
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  render() {
    return (
      <Fragment>
        <Hamburger />
        {ReactDOM.createPortal(
          <FullScreenNav />,
          $root,
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({  navIsOpen: state.navIsOpen });
 
export default connect(mapStateToProps)(Nav);
