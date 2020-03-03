import styled from 'styled-components';

export const StyledIcon = styled.span`
  line-height: normal;
  fill: ${props => props.color || ''};
  
  ${props => props.icon ? `
    svg {
      height: 2.4rem;
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
