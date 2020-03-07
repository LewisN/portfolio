import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const StyledIntro = styled.section`
  ${container}
  padding-bottom: 4rem;
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export const StyledTitle = styled.h1`
  margin-top: 0;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -0.2rem;
  text-align: left;

  @media (min-width: 768px) {
    line-height: 9rem;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const StyledTagline = styled.h2`
  font-size: 2rem;
  margin: 0 0 2rem;
  line-height: normal;
  font-weight: 700;
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const StyledDesc = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;

  @media (min-width: 768px) {
    width: 66.66666667%;
  }
`;

export const StyledDescContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledList = styled.div`
  display: inline-block;
  vertical-align: top;
  font-style: italic;
  margin-block-start: 2rem;
  margin-block-end: 1rem;
  text-align: left;

  @media (min-width: 768px) {
    width: auto;
    margin-right: 8%;
    max-width: 25%;
  }

  h3 {
    font-size: 1.6rem;
    padding-right: 10px;
    margin: 0;
    display: block;
    line-height: normal;
    font-style: normal;
    font-weight: 700;
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

export const StyledListSection = styled.div`
  font-style: normal;
  margin: 10px 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledButtonContainer = styled.div`
  margin: 3rem 0;
`;

export const StyledButtons = styled.div`
  text-align: center;
`;
