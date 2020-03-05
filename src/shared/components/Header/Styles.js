import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  padding: 1rem;
  background-color: #FFF;
  border-bottom: 1px solid #eee;
  line-height: normal;

  button {
    vertical-align: middle;
    margin: 0 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    background-color: transparent;
    border-bottom: none;
  }
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 1340px;
    margin: 0 auto;
  }
`;
