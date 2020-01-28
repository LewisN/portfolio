import styled from 'styled-components';
import { container } from '../../css';

export const StyledFooter = styled.footer`
  min-width: 100%;
  height: 367px;
  background-color: #222;
  padding: 70px 20px 20px 20px;
  border-top: 0px;
  border-top-style: solid;
  border-top-color: #dc133b;
  text-align: center;
  color: white;

  a {
    color: white;
  }

  @media (min-width: 768px) {
    height: 293px;
  }
`;

export const StyledFooterInner = styled.div`
  ${container}
`;

export const StyledFooterInfo = styled.div`
  border-top: 2px solid white;
  margin: 50px;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    flex: 1 0 0px;
  }
`;
