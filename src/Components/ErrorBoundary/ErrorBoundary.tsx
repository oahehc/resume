import React, { Component } from 'react'

type ErrorBoundaryState = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: Error | null, info: object) {
    console.log('--- componentDidCatch:', { error, info })
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <h1>Sorry! something went wrong!</h1>
    }

    return this.props.children
  }
}
