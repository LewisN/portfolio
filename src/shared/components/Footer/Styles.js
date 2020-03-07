import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const StyledFooter = styled.footer`
  overflow: hidden;
  box-sizing: border-box;
  min-width: 100%;
  background-color: #111;
  padding: 70px 20px 20px 20px;
  border-top: 0px;
  border-top-style: solid;
  border-top-color: #dc133b;
  text-align: center;
  color: white;
  font-family: ${props => props.theme.fonts.heading};

  a {
    color: white;
  }
`;

export const StyledFooterInner = styled.div`
  ${container}
`;

export const StyledFooterInfo = styled.div`
  border-top: 2px solid white;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * {
    flex: 1 0 0px;
    line-height: 5rem;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 50px;

    > * {
      line-height: inherit;
    }
  }
`;
