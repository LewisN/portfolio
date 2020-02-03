import styled from 'styled-components';
import { container } from '../../css';

export const StyledIntro = styled.section`
  ${container}
  padding-bottom: 4rem;
`;

export const StyledTitle = styled.h1`
  margin-top: 0;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -0.3rem;

  @media (min-width: 768px) {
    font-size: 10rem;
    padding-top: 10rem;
    margin-bottom: 7rem;
    line-height: 9rem;
    letter-spacing: -0.3rem;
  }
`;

export const StyledDesc = styled.div`
  display: inline-block;
  vertical-align: top;

  @media (min-width: 768px) {
    width: 66.66666667%;
  }
`;

export const StyledList = styled.div`
  display: inline-block;
  vertical-align: top;
  font-style: italic;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  @media (min-width: 768px) {
    width: 25%;
    margin-left: 8.333%;
  }

  h3 {
    font-size: 1.8rem;
    padding-right: 10px;
    margin: 0;
    display: inline;
    line-height: normal;
  }

  ul {
    display: inline;
    list-style-type: none;
    padding: 0;
    line-height: 0;

    li {
      display: inline-block;
      padding-right: 10px;

      p {
        margin: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }
    }
  }

  @media (min-width: 768px) {
  }
`;

export const StyledButtonContainer = styled.div`
  margin: 3rem 0;
`;

export const StyledButtons = styled.div`
  text-align: center;
`;
