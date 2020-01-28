import styled from 'styled-components';
import { container } from '../../css';

export const StyledTagline = styled.p`
  ${container}
  
  font-family: ${props => props.theme.fonts.heading};
  line-height: 1.8;
  font-size: ${props => props.theme.fonts.sizes.small};
  padding-top: 50px;
  color: #000;

  em {
    font-weight: 900;
    font-style: normal;
  }

  a {
    color: ${props => props.theme.palette.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fonts.sizes.medium};
    padding-top: 200px;
  }
`;
