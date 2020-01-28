import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 100%;
  } /*16px*/

  body {
    background-color: white;
    font-family: ${props => props.theme.fonts.body};
    font-weight: 400;
    line-height: 1.65;
    color: #333;
  }

  p {
    margin-bottom: 1.15rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: ${props => props.theme.fonts.heading}
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: ${props => props.theme.fonts.sizes.extraLarge};
  }

  h2 {
    font-size: ${props => props.theme.fonts.sizes.large};
  }

  h3 {
    font-size: ${props => props.theme.fonts.sizes.medium};
  }

  h4 {
    font-size: ${props => props.theme.fonts.sizes.small};
  }

  h5 {
    font-size: ${props => props.theme.fonts.sizes.extraSmall};
  }

  small {
    font-size: ${props => props.theme.fonts.sizes.extraExtraSmall};
  }
`;

export default GlobalStyle;
