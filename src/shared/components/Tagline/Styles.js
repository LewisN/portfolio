import styled from 'styled-components';
import { container } from '../../css';

export const StyledTagline = styled.p`
  ${container}
  margin-top: 0;
  font-size: 2.5rem;
  line-height: 2;
  padding-top: 20px;
  color: #000;

  /* line-height: 4rem;
  font-size: 2rem;
  padding-right: 40px; */

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
    padding-top: 160px;
  }
`;
