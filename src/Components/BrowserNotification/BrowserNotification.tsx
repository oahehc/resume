import React, { useState, useContext, useEffect, useCallback } from 'react'
import { I18nContext } from '../../Context/Context'
import is from 'is_js'
import { NotificationWrapper, Notification } from './BrowserNotification.style'

type stateType = {
  isBrowserSupport: boolean
  closeNotification: boolean
}
const defaultState: stateType = {
  isBrowserSupport: false,
  closeNotification: false,
}

const BrowserNotification: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  const [state, setState] = useState(defaultState)

  const checkBrowser = useCallback(() => {
    let isBrowserSupport = false

    if (is.chrome('>=69') || is.firefox('>=70')) {
      isBrowserSupport = true
    }

    setState(state => ({
      ...state,
      isBrowserSupport,
    }))
  }, [])

  useEffect(() => {
    checkBrowser()
  }, [checkBrowser])

  const handleCloseNotification = () => {
    setState({
      ...state,
      closeNotification: true,
    })
    setTimeout(() => {
      setState({
        ...state,
        isBrowserSupport: true,
      })
    }, 300)
  }

  const { isBrowserSupport, closeNotification } = state

  if (isBrowserSupport) {
    return null
  }

  return (
    <NotificationWrapper>
      <Notification className={closeNotification ? 'close' : ''}>
        <p>{getContent('browserSupportNotice')}</p>
        <button onClick={handleCloseNotification}>{getContent('close')}</button>
      </Notification>
    </NotificationWrapper>
  )
}

export default BrowserNotification
