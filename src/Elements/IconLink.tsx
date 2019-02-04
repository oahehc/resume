import React, { Component } from 'react'
import { Github, PersonalComputer } from 'grommet-icons'
import styled from 'styled-components/macro'
import { grey1 } from '../styles/vars'

const A = styled.a`
  & > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    & > svg {
      stroke: ${grey1};
      fill: ${grey1};
    }
  }
`

const NPMIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>NPM icon</title>
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
    <path d="M10.665 10H12v2.667h-1.335V10z" />
  </svg>
)

type iconLinkPropType = {
  type: string
  link: string
}

export default class IconLink extends Component<iconLinkPropType> {
  getIconComponent = () => {
    const { type } = this.props

    switch (type) {
      case 'github':
        return Github
      case 'preview':
        return PersonalComputer
      case 'npm':
        return NPMIcon
      default:
        return ''
    }
  }

  render() {
    const { link } = this.props
    const Icon = this.getIconComponent()

    return (
      <A target="_blank" href={link} rel="noopener">
        <Icon />
      </A>
    )
  }
}
