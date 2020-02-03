import React from 'react';
import { StyledButton } from './Styles';

const ConditionalLink = ({ link, wrapper, children }) => 
  link ? wrapper(children) : children;

const Button = props => (
  <StyledButton {...props}>
    <ConditionalLink
      link={props.href}
      wrapper={children => <a href={props.href}>{children}</a>}
    >
      {props.text}
      {props.children}
    </ConditionalLink>
  </StyledButton>
);

export default Button;
