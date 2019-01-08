import React, { Component } from 'react'
import { Grommet } from 'grommet'
import 'normalize.css/normalize.css'
import GlobalStyle from './global'
import theme from './theme'

export default class StyleProvider extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        {this.props.children}
        <GlobalStyle />
      </Grommet>
    )
  }
}
