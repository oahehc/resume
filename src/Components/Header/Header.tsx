import React, { useContext, useState } from 'react'
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

type stateType = {
  currentAnchor?: string
  showMobileHeader: boolean
}

const defaultState: stateType = {
  currentAnchor: window.location.hash,
  showMobileHeader: false,
}

const Header: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  const [state, setState] = useState(defaultState)

  const changeAnchor = (currentAnchor: string): void => {
    setState({
      ...state,
      currentAnchor,
    })
  }

  const handleToggleMobileHeader = () => {
    setState({
      ...state,
      showMobileHeader: !state.showMobileHeader,
    })
  }
  const { currentAnchor, showMobileHeader } = state

  return (
    <React.Fragment>
      <MobileHeader
        className={showMobileHeader ? 'open' : ''}
        onClick={handleToggleMobileHeader}
      >
        {links.map(({ anchor, textKey, indicatorColor }) => (
          <MobileLink
            key={textKey}
            onClick={() => changeAnchor(anchor)}
            href={anchor}
            indicatorColor={indicatorColor}
          >
            {getContent(textKey)}
          </MobileLink>
        ))}
      </MobileHeader>
      <HeaderWrapper>
        <MobileToggle onClick={handleToggleMobileHeader}>
          <UnorderedList />
        </MobileToggle>
        {links.map(({ anchor, textKey, icon, indicatorColor }) => (
          <Link
            key={textKey}
            className={cx({ active: anchor === currentAnchor })}
            onClick={() => changeAnchor(anchor)}
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

export default Header
