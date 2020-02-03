import React from 'react';
import { connect } from 'react-redux';
import { Overlay, StyledNav } from './Styles';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { setNavState } from '../../../../actions';

const navLinks = [
  {
    name: 'Home',
    path: '/#',
  },
  {
    name: 'Work',
    path: '/#projects',
  },
  {
    name: 'Contact',
    path: '/#contact',
  },
];

const FullScreenNav = props => (
  <Overlay navIsOpen={props.navIsOpen}>
    <StyledNav role="navigation">
      <ul role="menubar" aria-hidden="false">
        {navLinks.map(link => {
          const hashesAndPaths = link.path.match(/[/#]/g);
          const isHash = hashesAndPaths[hashesAndPaths.length - 1] === '#';
          const LinkComponent = isHash ? HashLink : Link;

          return (
            <li key={link.name} role="menuitem">
              <LinkComponent
                to={link.path}
                onClick={() => props.setNavState('CLOSED')}
              >
                {link.name}
              </LinkComponent>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  </Overlay>
);

const mapStateToProps = state => ({  navIsOpen: state.navIsOpen });
 
export default connect(mapStateToProps, { setNavState })(FullScreenNav);
