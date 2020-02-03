import styled from 'styled-components';
import { container } from '../../css';

export const StyledMediaLarge = styled.div`
  padding: 6rem 0;
  background-color: ${props => props.color};
`;

export const StyledMediaLargeInner = styled.div`
  ${container}

  img,
  video {
    margin: 0 auto;
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;


export const StyledMediaLargeMarkup = styled.div`
  @media (min-width: 768px) {
    width: 66.66666667%;
  }
`;