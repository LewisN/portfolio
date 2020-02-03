import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: inline-block;
  height: 2.8rem;
  width: 2.8rem;
  fill: #111;

  ${props => props.color ? `
    ${props.color === 'white' ? 'fill: #FFF;' : ''}
  ` : ''};

  ${props => props.size === 'large' ? `
    height: 4rem;
    width: 4rem;
  ` : ''};
`;
