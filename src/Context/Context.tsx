import React, { createContext, useState, useEffect } from 'react'
import idx from 'idx'
import content from './content.json'
import { getLangFromUrlSearch } from '../Utils/regex'

interface contentType {
  [key: string]: any
}

export const defaultLang: string = 'en'
export const I18nContext = createContext({
  lang: defaultLang,
  content: {},
  changeLang: (x: string): void => {},
  getContent: (x: string, y?: string): any => x,
})

const ContextProvider: React.SFC = props => {
  const [lang, changeLang] = useState(defaultLang)

  function getContent(key: string, selectLang?: string): string {
    const cont: contentType = content

    if (selectLang && idx(cont, _ => _[key][selectLang])) {
      return idx(cont, _ => _[key][selectLang])
    }

    return (
      idx(cont, _ => _[key][lang]) ||
      idx(cont, _ => _[key][defaultLang]) ||
      idx(cont, _ => _[key].all) ||
      null
    )
  }

  useEffect(() => {
    const { search } = window.location
    const lang = getLangFromUrlSearch(search)

    if (lang) {
      changeLang(lang)
    }
  }, [])

  return (
    <I18nContext.Provider
      value={{
        lang,
        content,
        changeLang,
        getContent,
      }}
    >
      {props.children}
    </I18nContext.Provider>
  )
}

export default ContextProvider
