import React, { Component, FormEvent } from 'react'
import styled from 'styled-components/macro'
import { CheckBox } from 'grommet'
import { I18nContext } from '../../Context/Context'

const ToggleWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  font-size: 12px;

  label > div {
    margin: 0 5px;
  }
`

class I18nToggle extends Component {
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
    const { lang } = this.context

    return (
      <ToggleWrapper>
        English
        <CheckBox
          checked={lang !== 'en'}
          onChange={this.handleToggleLang}
          toggle
        />
        中文
      </ToggleWrapper>
    )
  }
}

export default I18nToggle
