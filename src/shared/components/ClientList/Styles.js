import styled from 'styled-components';

export const StyledClientList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    display: inline-block;
    vertical-align: middle;
    margin: 1rem;
    position: relative;
  }

  @media (min-width: 768px) {
    li {
      margin: 3.5rem;
    }
  }
`;

export const StyledClientLogo = styled.div`
  max-width: 6rem;
  height: 4rem;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: ease .2s transform;

    &:hover {
      transform: translateY(-50%) scale(1.15);
      transition: ease .2s transform;
    }
  }

  @media (min-width: 768px) {
    max-width: 10rem;
    height: 4rem;
  }
`;
