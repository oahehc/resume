import React, { Component } from 'react'
import cx from 'classnames'
import { infoColor1, expColor1, portfolioColor1 } from '../../styles/vars'
import { Iteration, Tree, User, UnorderedList } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import I18nToggle from '../I18nToggle/I18nToggle'
import {
  HeaderWrapper,
  Link,
  Dividend,
  MobileToggle,
  MobileHeader,
  MobileLink,
} from './Header.style'

const links = [
  {
    anchor: '#info',
    textKey: 'anchorInfo',
    icon: <User />,
    indicatorColor: infoColor1,
    activeColor: infoColor1,
  },
  {
    anchor: '#exp',
    textKey: 'anchorExp',
    icon: <Tree />,
    indicatorColor: expColor1,
    activeColor: expColor1,
  },
  {
    anchor: '#portfolio',
    textKey: 'anchorPortfolio',
    icon: <Iteration />,
    indicatorColor: portfolioColor1,
    activeColor: portfolioColor1,
  },
]

type HeaderState = {
  currentAnchor?: string
  showMobileHeader: boolean
}

class Header extends Component<{}, HeaderState> {
  static contextType = I18nContext
  state = {
    currentAnchor: window.location.hash,
    showMobileHeader: false,
  }

  changeAnchor = (currentAnchor: string): void => {
    this.setState({ currentAnchor })
  }

  handleToggleMobileHeader = () => {
    this.setState(prevState => ({
      showMobileHeader: !prevState.showMobileHeader,
    }))
  }

  render() {
    const { getContent } = this.context
    const { currentAnchor, showMobileHeader } = this.state

    return (
      <React.Fragment>
        <MobileHeader
          className={showMobileHeader ? 'open' : ''}
          onClick={this.handleToggleMobileHeader}
        >
          {links.map(({ anchor, textKey, indicatorColor }) => (
            <MobileLink
              key={textKey}
              onClick={() => this.changeAnchor(anchor)}
              href={anchor}
              indicatorColor={indicatorColor}
            >
              {getContent(textKey)}
            </MobileLink>
          ))}
        </MobileHeader>
        <HeaderWrapper>
          <MobileToggle onClick={this.handleToggleMobileHeader}>
            <UnorderedList />
          </MobileToggle>
          {links.map(({ anchor, textKey, icon, indicatorColor }) => (
            <Link
              key={textKey}
              className={cx({ active: anchor === currentAnchor })}
              onClick={() => this.changeAnchor(anchor)}
              href={anchor}
              indicatorColor={indicatorColor}
            >
              {icon}
              <div>{getContent(textKey)}</div>
            </Link>
          ))}
          <Dividend />
          <I18nToggle />
        </HeaderWrapper>
      </React.Fragment>
    )
  }
}

export default Header
