import React from 'react';
import { StyledTextArea } from './Styles';

const TextArea = props => (
  <StyledTextArea {...props}>
    {props.children}
  </StyledTextArea>
);

export default TextArea;
