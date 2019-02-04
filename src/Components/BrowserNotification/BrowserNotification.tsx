import React, { Component } from 'react'
import { I18nContext } from '../../Context/Context'
import is from 'is_js'
import { NotificationWrapper, Notification } from './BrowserNotification.style'

type browserNotificationState = {
  isBrowserSupport: boolean
  closeNotification: boolean
}

export default class BrowserNotification extends Component<
  {},
  browserNotificationState
> {
  static contextType = I18nContext

  state = {
    isBrowserSupport: false,
    closeNotification: false,
  }

  componentDidMount() {
    this.checkBrowser()
  }

  checkBrowser = () => {
    let isBrowserSupport = false

    if (is.chrome('>=69')) {
      isBrowserSupport = true
    }

    this.setState({
      isBrowserSupport,
    })
  }

  handleCloseNotification = () => {
    this.setState(
      {
        closeNotification: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            isBrowserSupport: true,
          })
        }, 300)
      },
    )
  }

  render() {
    const { isBrowserSupport, closeNotification } = this.state
    const { getContent } = this.context

    if (isBrowserSupport) {
      return null
    }

    return (
      <NotificationWrapper>
        <Notification className={closeNotification ? 'close' : ''}>
          <p>{getContent('browserSupportNotice')}</p>
          <button onClick={this.handleCloseNotification}>
            {getContent('close')}
          </button>
        </Notification>
      </NotificationWrapper>
    )
  }
}
