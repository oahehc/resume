import React from 'react'
import idx from 'idx'
import content from './content.json'

interface contentType {
  [key: string]: any
}

const defaultLang: string = 'en'
export const I18nContext = React.createContext({
  lang: defaultLang,
  content: {},
  toggleLang: (x: string) => {},
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

  toggleLang = (lang: string): void => {
    this.setState({ lang })
  }

  getContent = (key: string): string => {
    const cont: contentType = content
    const { lang } = this.state

    return (
      idx(cont, _ => _[key][lang]) ||
      idx(cont, _ => _[key][defaultLang]) ||
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
          toggleLang: this.toggleLang,
          getContent: this.getContent,
        }}
      >
        {this.props.children}
      </I18nContext.Provider>
    )
  }
}
