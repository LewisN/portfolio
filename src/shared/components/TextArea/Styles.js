import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  border-radius: 3px;
  border: none;
  font-weight: 700;
  padding: 10px;
  background-color: ${props => props.theme.palette.primary};
  outline: none;

  &:focus {
    background: black;
    transition: all 0.3s ease;
    color: ${props => props.theme.palette.primary};
    outline: none;
  }

  &:hover {
    transition: all 0.5s ease;
    border: none;
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
