import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StyleProvider from './styles/StyleProvider'

ReactDOM.render(
  <StyleProvider>
    <App />
  </StyleProvider>,
  document.getElementById('root'),
)
