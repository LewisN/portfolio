import styled from 'styled-components';
import { container } from '../../shared/styles/mixins';

export const Container = styled.div`
  ${container}

  ${props => props.center ? `
    text-align: center;
  ` : ''}
`;

export const StyledTitle = styled.h1`
  margin-top: 0;
  
  @media (min-width: 768px) {
    font-size: 10rem;
    padding-top: 10rem;
    margin-bottom: 7rem;
    line-height: 9rem;
    letter-spacing: -0.3rem;
  }
`;
