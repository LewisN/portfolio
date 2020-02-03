import styled from 'styled-components';

export const StyledProjectList = styled.ul`
  margin: 10px 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 0;
  
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    vertical-align: top;
    width: 100%;
  }

  @media (min-width: 768px) {
    li {
      width: 50%;
    }
  }
  
  @media (min-width: 992px) {
    li {
      width: 33.333%;
    }
  }
`;
