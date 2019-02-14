import React, { useContext, FormEvent } from 'react'
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

const I18nToggle: React.SFC = () => {
  const { lang, changeLang } = useContext(I18nContext)

  const handleToggleLang = (event: FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.checked) {
      changeLang('zh')
    } else {
      changeLang('en')
    }
  }

  return (
    <ToggleWrapper>
      English
      <CheckBox checked={lang !== 'en'} onChange={handleToggleLang} toggle />
      中文
    </ToggleWrapper>
  )
}

export default I18nToggle
