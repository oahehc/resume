import React, { Component, MouseEvent } from 'react'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import { Img, Lightbox, Control } from './Gallery.style'

type galleryProps = {
  images: { src: string; alt: string }[]
}
type galleryState = {
  showingSrcIndex: number
}

export default class Gallery extends Component<galleryProps, galleryState> {
  state = {
    showingSrcIndex: -1,
  }

  handleToggleLightbox = (index: number) => {
    const { images } = this.props

    this.setState({
      showingSrcIndex: index >= images.length ? -1 : index,
    })
  }

  handleToPreviousImage = (e: MouseEvent) => {
    e.stopPropagation()
    const { showingSrcIndex } = this.state

    this.handleToggleLightbox(showingSrcIndex - 1)
  }

  handleToNextImage = (e: MouseEvent) => {
    e.stopPropagation()
    const { showingSrcIndex } = this.state

    this.handleToggleLightbox(showingSrcIndex + 1)
  }

  render() {
    const { images } = this.props
    const { showingSrcIndex } = this.state
    const playingImage = showingSrcIndex > -1 ? images[showingSrcIndex] : null

    return (
      <React.Fragment>
        {images.map(({ src, alt }: any, index: number) => (
          <Img
            key={index}
            src={src}
            alt={alt}
            onClick={() => this.handleToggleLightbox(index)}
          />
        ))}
        {playingImage && (
          <Lightbox onClick={() => this.handleToggleLightbox(-1)}>
            <Control onClick={this.handleToPreviousImage}>
              <CaretPrevious />
            </Control>
            <img src={playingImage.src} alt={playingImage.alt} />
            <Control onClick={this.handleToNextImage}>
              <CaretNext />
            </Control>
          </Lightbox>
        )}
      </React.Fragment>
    )
  }
}
