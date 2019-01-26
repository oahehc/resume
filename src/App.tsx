import React, { Component } from 'react'
import { I18nContext } from './Context/Context'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import SegmentInfo from './Components/SegmentInfo/SegmentInfo'
import SegmentExp from './Components/SegmentExp/SegmentExp'
import SegmentPortfolio from './Components/SegmentPortfolio/SegmentPortfolio'

class App extends Component {
  static contextType = I18nContext

  componentDidUpdate() {
    const { getContent } = this.context
    const title = `${getContent('name')} | ${getContent('resume')}`

    if (document.title !== title) {
      document.title = title
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SegmentInfo />
        <SegmentExp />
        <SegmentPortfolio />
        <Footer />
      </div>
    )
  }
}

export default App
