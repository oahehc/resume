import React, { Component } from 'react'
import { I18nContext } from '../../Context/Context'
import { Wrapper } from './Footer.style'
import release from '../../Assets/release.json'

type footerState = {
  now: Date
}
export default class Footer extends Component<{}, footerState> {
  static contextType = I18nContext

  state = {
    now: new Date(),
  }

  render() {
    const { getContent } = this.context
    const { now } = this.state
    const currentYear = now.getFullYear()
    const releaseDate = new Date(+release.date * 1000)

    return (
      <Wrapper>
        <span>&copy; {currentYear} Oahehc</span>
        <span>
          {getContent('lastUpdate')}: {releaseDate.toLocaleDateString()}
        </span>
      </Wrapper>
    )
  }
}
