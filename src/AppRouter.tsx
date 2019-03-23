import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from './Pages/Root'
import Print from './Pages/Print'

const AppRouter: React.SFC = () => {
  return (
    <Router>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Root} />
      <Route path={process.env.PUBLIC_URL + '/print'} component={Print} />
    </Router>
  )
}

export default AppRouter
