import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif', 'Microsoft Jhenghei', 'Pingfang TC';
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
`
