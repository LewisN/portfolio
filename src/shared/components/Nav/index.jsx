import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './Hamburger';
import FullScreenNav from './FullScreenNav';

const $root = document.getElementById('root');

const Nav = () => (
  <Fragment>
    <Hamburger />
    {ReactDOM.createPortal(
      <FullScreenNav />,
      $root,
    )}
  </Fragment>
);
 
export default Nav;
