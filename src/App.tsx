import React, { Component } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'grommet'
import { I18nContext } from './Context/Context'

const P = styled.p`
  color: red;
`

class App extends Component {
  static contextType = I18nContext

  public render() {
    const { lang, getContent, toggleLang } = this.context

    return (
      <div className="App">
        <header className="App-header">
          <P>{lang}</P>
          <P>{getContent('title')}</P>
          <Button label="Button" onClick={() => toggleLang('zh')} />
        </header>
      </div>
    )
  }
}

export default App
