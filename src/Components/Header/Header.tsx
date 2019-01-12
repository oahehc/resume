import React, { Component } from 'react'
import cx from 'classnames'
import styled from 'styled-components/macro'
import { I18nContext } from '../../Context/Context'
import I18nToggle from '../I18nToggle/I18nToggle'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  height: 50px;
`
const Link = styled.a`
  margin: 0 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &.active {
    border-bottom: 2px solid red;
  }
`

class Header extends Component {
  static contextType = I18nContext
  state = {
    anchor: window.location.hash,
  }

  changeAnchor = (anchor: string): void => {
    this.setState({ anchor })
  }

  render() {
    const { getContent } = this.context
    const { anchor } = this.state

    return (
      <HeaderWrapper>
        <Link
          className={cx({ active: anchor === '#info' })}
          onClick={() => this.changeAnchor('#info')}
          href="#info"
        >
          {getContent('anchorInfo')}
        </Link>
        <Link
          className={cx({ active: anchor === '#edu' })}
          onClick={() => this.changeAnchor('#edu')}
          href="#edu"
        >
          {getContent('anchorEdu')}
        </Link>
        <Link
          className={cx({ active: anchor === '#exp' })}
          onClick={() => this.changeAnchor('#exp')}
          href="#exp"
        >
          {getContent('anchorExp')}
        </Link>
        <Link
          className={cx({ active: anchor === '#work' })}
          onClick={() => this.changeAnchor('#work')}
          href="#work"
        >
          {getContent('anchorWork')}
        </Link>
        |
        <I18nToggle />
      </HeaderWrapper>
    )
  }
}

export default Header
