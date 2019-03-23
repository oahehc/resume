import { createGlobalStyle } from 'styled-components/macro'
import * as vars from './vars'

export default createGlobalStyle`
  * {
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif', 'Microsoft Jhenghei', 'Pingfang TC';
    color: ${vars.grey1};
  }
  
  html,
  body {
    height: 100vh;
    width: 100vw;
    overflow: auto;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${vars.white};
  }

  @media print {
    html,
    body {
      height: auto;
      width: 100vw;
      overflow: auto;
    }
  }

  a {
    text-decoration: none;
    color: ${vars.linkColor};

    &:hover {
      color: ${vars.linkColorHover};
    }

    &:active {
      color: ${vars.linkColor};
      transform: translateY(5%);
    }
  }
`
