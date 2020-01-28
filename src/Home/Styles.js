import styled from 'styled-components';
import { container } from '../shared/css';

export const SocialIconsContainer = styled.div`
  ${container}
  padding-top: 50px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-bottom: 200px;
  }
`;