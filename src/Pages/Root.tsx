import React, { useContext, useEffect } from 'react'
import { I18nContext } from '../Context/Context'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import SegmentInfo from '../Components/SegmentInfo/SegmentInfo'
import SegmentExp from '../Components/SegmentExp/SegmentExp'
import SegmentPortfolio from '../Components/SegmentPortfolio/SegmentPortfolio'

const Root: React.SFC = () => {
  const { getContent } = useContext(I18nContext)

  useEffect(() => {
    const title = `${getContent('name')} | ${getContent('resume')}`

    if (document.title !== title) {
      document.title = title
    }
  }, [getContent])

  return (
    <React.Fragment>
      <Header />
      <SegmentInfo />
      <SegmentExp />
      <SegmentPortfolio />
      <Footer />
    </React.Fragment>
  )
}

export default Root
