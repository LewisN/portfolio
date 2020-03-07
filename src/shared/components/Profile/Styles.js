import styled from 'styled-components';

export const StyledProfileSection = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledProfile = styled.div`
  background: #f7f7f7;
  display: flex; 
  flex-direction: column-reverse;

  p,
  ul li {
    font-size: 1.4rem;
    line-height: 1.7;
  }

  h3 {
    font-size: 2.5rem;
    line-height: normal;
    margin-bottom: 1.2rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem 0;
  }
  
  @media (min-width: 992px) {
    padding: 3rem 6rem;
  }
`;

export const StyledProfileContent = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;
