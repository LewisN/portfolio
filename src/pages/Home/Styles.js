import styled from 'styled-components';
import { container } from '../../shared/css';

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
  }
`;
