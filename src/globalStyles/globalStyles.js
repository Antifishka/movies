import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from 'globalStyles/theme';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.lineHeights.text};
  }
  #root { 
    height: 100%; 
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
  }
`;