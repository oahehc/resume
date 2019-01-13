import React, { Component } from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'
import { infoColor1, expColor1, workColor1 } from '../../styles/vars'
import { Code, Tree, User } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import I18nToggle from '../I18nToggle/I18nToggle'

type LinkProps = {
  indicatorColor?: string
}
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
  position: relative;

  & > svg {
    margin-right: 5px;
  }

  & > div:after {
    content: ' ';
    position: absolute;
    bottom: -3px;
    left: 30px;
    height: 3px;
    width: 0;
    background: ${(props: LinkProps) => props.indicatorColor || 'transparent'};
    transition: width 0.4s ease;
  }

  &:hover,
  &.active {
    & > div {
      color: ${(props: LinkProps) => props.indicatorColor || 'inherit'};
    }

    & > div:after {
      width: calc(100% - 30px);
    }

    & > svg {
      fill: ${(props: LinkProps) => props.indicatorColor || 'inherit'};
      stroke: ${(props: LinkProps) => props.indicatorColor || 'inherit'};
    }
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
    icon: <Code />,
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
