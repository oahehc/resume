import React, { Component, FormEvent } from 'react'
import styled from 'styled-components/macro'
import { CheckBox } from 'grommet'
import { I18nContext } from './Context/Context'

const I18nToggle = styled.div`
  display: flex;

  label > div {
    margin: 0 5px;
  }
`

class App extends Component {
  static contextType = I18nContext

  handleToggleLang = (event: FormEvent<HTMLInputElement>): void => {
    const { changeLang } = this.context
    if (event.currentTarget.checked) {
      changeLang('zh')
    } else {
      changeLang('en')
    }
  }

  render() {
    const { lang, getContent } = this.context

    return (
      <div className="App">
        <header className="App-header">
          <p>{getContent('title')}</p>
          <p>{getContent('skill')}</p>
          <I18nToggle>
            English
            <CheckBox
              checked={lang !== 'en'}
              onChange={this.handleToggleLang}
              toggle
            />
            中文
          </I18nToggle>
        </header>
      </div>
    )
  }
}

export default App
