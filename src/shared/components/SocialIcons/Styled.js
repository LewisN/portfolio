import styled from 'styled-components';

export const StyledSocialIcons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 1rem;
    line-height: 0;
    vertical-align: middle;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;