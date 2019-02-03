import React from 'react'
import idx from 'idx'
import content from './content.json'
import { getLangFromUrlSearch } from '../Utils/regex'

interface contentType {
  [key: string]: any
}

export const defaultLang: string = 'en'
export const I18nContext = React.createContext({
  lang: defaultLang,
  content: {},
  changeLang: (x: string): void => {},
  getContent: (x: string): string => x,
})

export interface ContextProps {}

export default class Context extends React.Component<ContextProps, any> {
  constructor(props: ContextProps) {
    super(props)
    this.state = {
      lang: defaultLang,
    }
  }

  componentDidMount() {
    this.getDefaultLangFromUrl()
  }

  getDefaultLangFromUrl = () => {
    console.log('----- getDefaultLangFromUrl')
    const { search } = window.location
    const lang = getLangFromUrlSearch(search)
    console.log('----- getDefaultLangFromUrl lang:', lang)

    if (lang) {
      this.changeLang(lang)
    }
  }

  changeLang = (lang: string): void => {
    this.setState({ lang })
  }

  getContent = (key: string): string => {
    const cont: contentType = content
    const { lang } = this.state

    return (
      idx(cont, _ => _[key][lang]) ||
      idx(cont, _ => _[key][defaultLang]) ||
      idx(cont, _ => _[key].all) ||
      null
    )
  }

  public render() {
    const { lang } = this.state

    return (
      <I18nContext.Provider
        value={{
          lang,
          content,
          changeLang: this.changeLang,
          getContent: this.getContent,
        }}
      >
        {this.props.children}
      </I18nContext.Provider>
    )
  }
}
