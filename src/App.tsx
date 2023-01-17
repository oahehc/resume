import React from 'react'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import AppRouter from './AppRouter'

const App: React.SFC = () => {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
