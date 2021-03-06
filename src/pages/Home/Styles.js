import styled from 'styled-components';
import { container } from '../../shared/styles/mixins';

export const Container = styled.div`
  ${container}

  ${props => props.center ? `
    text-align: center;
  ` : ''}
`;

export const SocialIconsContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    padding-bottom: 12rem;
    max-width: 580px;
  }
`;

export const StyledHeading = styled.h2`
  text-align: center;
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const StyledSection = styled.section`
  margin: 3rem 0 6rem 0;

  @media (min-width: 768px) {
    margin: 3rem 0 12rem 0;
  }
`;