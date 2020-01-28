import styled from 'styled-components';

export const StyledIcon = styled.a`
  fill: ${props => props.color || ''};
  
  ${props => props.icon ? `
    svg {
      height: 25px;
      width: auto;
    }
  ` : ''}

  svg {
    transition: .2s ease all;
  }

  &:hover svg {
    transform: scale(1.1);
    fill: ${props => props.theme.palette.accent};
  }
`;
