import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StyleProvider from './styles/StyleProvider'
import Context from './Context/Context'

ReactDOM.render(
  <Context>
    <StyleProvider>
      <App />
    </StyleProvider>
  </Context>,
  document.getElementById('root'),
)
