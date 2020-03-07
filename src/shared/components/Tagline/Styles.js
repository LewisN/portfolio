import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const StyledTagline = styled.div`
  ${container}

  p {
    margin-top: 0;
    font-weight: 800;
    line-height: normal;
    padding-top: 20px;
    color: #000;
    font-size: 3rem;

    em {
      font-weight: 800;
      font-style: normal;
      display: inline-block;
      color: ${props => props.theme.palette.accent};
    }

    a {
      color: ${props => props.theme.palette.accent};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 360px) {
      font-size: 4rem;
    }
  }

  @media (min-width: 768px) {
    padding-top: 90px;
    max-width: 580px;
  }
`;
