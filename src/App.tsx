import React, { Component } from 'react'
import { I18nContext } from './Context/Context'
import Header from './Components/Header/Header'
import SegmentInfo from './Components/SegmentInfo/SegmentInfo'
import SegmentExp from './Components/SegmentExp/SegmentExp'
import SegmentEdu from './Components/SegmentEdu/SegmentEdu'
import SegmentWork from './Components/SegmentWork/SegmentWork'

class App extends Component {
  static contextType = I18nContext

  render() {
    const { getContent } = this.context

    return (
      <div>
        <Header />
        <SegmentInfo />
        <SegmentExp />
        <SegmentEdu />
        <SegmentWork />
      </div>
    )
  }
}

export default App
