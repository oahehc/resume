import React from 'react'

type LinkProps = {
  src: string
}
const Link: React.SFC<LinkProps> = ({ src }) => (
  <a href={src} target="_blank" rel="noreferrer">
    {src.replace(/^https:\/\//, '')}
  </a>
)

export default Link
