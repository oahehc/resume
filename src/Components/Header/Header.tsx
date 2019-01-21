import React, { Component } from 'react'
import cx from 'classnames'
import { infoColor1, expColor1, workColor1 } from '../../styles/vars'
import { Iteration, Tree, User } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import I18nToggle from '../I18nToggle/I18nToggle'
import { HeaderWrapper, Link } from './Header.style'

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
    anchor: '#work',
    textKey: 'anchorWork',
    icon: <Iteration />,
    indicatorColor: workColor1,
    activeColor: workColor1,
  },
]

class Header extends Component {
  static contextType = I18nContext
  state = {
    currentAnchor: window.location.hash,
  }

  changeAnchor = (currentAnchor: string): void => {
    this.setState({ currentAnchor })
  }

  render() {
    const { getContent } = this.context
    const { currentAnchor } = this.state

    return (
      <React.Fragment>
        <HeaderWrapper>
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
          |
          <I18nToggle />
        </HeaderWrapper>
        {/* <Aside>
          {links.map(({ anchor, textKey, icon }) => (
            <Link
              className={cx({ active: anchor === currentAnchor })}
              onClick={() => this.changeAnchor(anchor)}
              href={anchor}
              title={getContent(textKey)}
            >
              {icon}
            </Link>
          ))}
        </Aside> */}
      </React.Fragment>
    )
  }
}

export default Header
