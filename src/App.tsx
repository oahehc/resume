import React from 'react'
import BrowserNotification from './Components/BrowserNotification/BrowserNotification'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import AppRouter from './AppRouter'

const App: React.SFC = () => {
  return (
    <ErrorBoundary>
      <BrowserNotification />
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
