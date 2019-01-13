import React, { Component } from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'
import { Code, Tree, User } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import I18nToggle from '../I18nToggle/I18nToggle'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 0 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover > div,
  &.active > div {
    border-bottom: 2px solid red;
  }

  & > svg {
    margin-right: 5px;
  }
`
// const Aside = styled.div`
//   position: fixed;
//   top: 200px;
//   right: 5px;
//   display: flex;
//   flex-direction: column;

//   & > a {
//     cursor: pointer;
//     padding: 5px;
//   }

//   & > a:nth-child(1) {
//     background-color: red;
//   }
// `

const links = [
  { anchor: '#info', textKey: 'anchorInfo', icon: <User /> },
  { anchor: '#exp', textKey: 'anchorExp', icon: <Tree /> },
  { anchor: '#work', textKey: 'anchorWork', icon: <Code /> },
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
          {links.map(({ anchor, textKey, icon }) => (
            <Link
              className={cx({ active: anchor === currentAnchor })}
              onClick={() => this.changeAnchor(anchor)}
              href={anchor}
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
