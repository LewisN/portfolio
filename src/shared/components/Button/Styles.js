import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background-color: ${props => props.primary ? props.theme.palette.accent : props.theme.palette.primary};
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  margin: 0 .3rem;
  text-decoration: none;
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.heading};
  border: 2px solid ${props => props.primary ? props.theme.palette.accent : props.theme.palette.secondary};
  color: ${props => props.primary ? props.theme.palette.primary : props.theme.palette.secondary};

  &:hover {
    transition: all 0.5s ease;
    border: 2px solid ${props => props.theme.palette.secondary};
    background-color: ${props => props.theme.palette.secondary};
    color: ${props => props.theme.palette.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
