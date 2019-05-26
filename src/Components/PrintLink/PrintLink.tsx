import React from 'react'

type LinkProps = {
  src?: string
}
const Link: React.SFC<LinkProps> = ({ src }) => <a href={src}>{src}</a>

export default Link
