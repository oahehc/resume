import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Print from './Pages/Print'

const AppRouter = () => {
  return (
    <Router>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Print} />
    </Router>
  )
}

export default AppRouter
