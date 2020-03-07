import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  html, body {
    background-color: white;
    font-family: ${props => props.theme.fonts.body};
    font-weight: 400;
    font-style: normal;
    font-size: 11px;
    line-height: 1;
    color: #111;
  }

  body {
    background-image: linear-gradient(180deg, #fff 40%, #efefef 100%);
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body > * {
    font-size: 1.6rem;
    line-height: 3rem;
  }

  *,
  *:before, *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.03rem;
  }

  h1 {
    margin-bottom: 3rem;
    font-size: 6.103515625rem;
    line-height: 7rem;
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 4.8828125rem;
    line-height: 6rem;
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 3.90625rem;
    line-height: 6rem;
  }

  h4 {
    margin-bottom: 3rem;
    font-size: 3.125rem;
    line-height: 4rem;
  }

  h5 {
    margin-bottom: 3rem;
    font-size: 2rem;
    line-height: 3rem;
  }

  p {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    line-height: 3rem;
    font-weight: 400;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  #root {
    overflow: hidden;
  }
`;

export default GlobalStyle;
