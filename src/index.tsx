import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import App from './App'
import StyleProvider from './styles/StyleProvider'
import Context from './Context/Context'

LogRocket.init('oahehc/resume-r1lhl')
setupLogRocketReact(LogRocket)

ReactDOM.render(
  <Context>
    <StyleProvider>
      <App />
    </StyleProvider>
  </Context>,
  document.getElementById('root'),
)
