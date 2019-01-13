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
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${vars.grey4};
    }

    &:active {
      color: ${vars.grey2};
    }
  }
`
