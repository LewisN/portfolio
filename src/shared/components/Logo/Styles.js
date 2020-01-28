import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  fill: #222;
  ${(props) => props.color ? `
    ${props.color === 'white' ? 'fill: #FFF;' : ''}
  ` : ''};
`;
