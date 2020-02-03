import styled from 'styled-components';

export const StyledTextInput = styled.input`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  border-radius: 3px;
  color: ${props => props.theme.palette.secondary};
  border: 1px solid ${props => props.theme.palette.secondary};
  font-weight: 700;
  padding: 10px;
  background-color: ${props => props.theme.palette.primary};
  outline: none;

  &:focus {
    background: ${props => props.theme.palette.secondary};
    transition: all 0.3s ease;
    color: ${props => props.theme.palette.primary};
    outline: none;
  }

  &:hover {
    transition: all 0.5s ease;
    border: 1px solid ${props => props.theme.palette.secondary};
    background-color: ${props => props.theme.palette.secondary};
    color: ${props => props.theme.palette.primary};
  }

  ${props => props.error ? `
    background: #ef2d2d0f;
  ` : ''}

  ${props => props.valid ? `
    background: #06f15c0f;
  ` : ''}
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: 800;
`;
