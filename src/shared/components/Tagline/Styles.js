import styled from 'styled-components';
import { container } from '../../css';

export const StyledTagline = styled.p`
  ${container}
  
  font-family: 'Merriweather', serif;
  line-height: 1.8;
  font-size: 1.5rem;
  padding-top: 50px;
  color: #000;

  em {
    font-weight: 900;
    font-style: normal;
  }

  a {
    color: #dc133b;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
    padding-top: 200px;
  }
`;