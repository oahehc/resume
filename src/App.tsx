import React, { useContext, useEffect } from 'react'
import { I18nContext } from './Context/Context'
import BrowserNotification from './Components/BrowserNotification/BrowserNotification'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SegmentInfo from './Components/SegmentInfo/SegmentInfo'
import SegmentExp from './Components/SegmentExp/SegmentExp'
import SegmentPortfolio from './Components/SegmentPortfolio/SegmentPortfolio'

const App: React.SFC = () => {
  const { getContent } = useContext(I18nContext)

  useEffect(
    () => {
      const title = `${getContent('name')} | ${getContent('resume')}`

      if (document.title !== title) {
        document.title = title
      }
    },
    [getContent('name')],
  )

  return (
    <ErrorBoundary>
      <BrowserNotification />
      <Header />
      <SegmentInfo />
      <SegmentExp />
      <SegmentPortfolio />
      <Footer />
    </ErrorBoundary>
  )
}

export default App
