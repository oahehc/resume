import React, { useContext } from 'react'
import { I18nContext } from '../../Context/Context'
import { Wrapper } from './Footer.style'
import release from '../../Assets/release.json'

const Footer: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  const now = new Date()
  const currentYear = now.getFullYear()
  const releaseDate = new Date(+release.date * 1000)

  return (
    <Wrapper>
      <span>&copy; {currentYear} Oahehc</span>
      <span>
        {getContent('lastUpdate')}: {releaseDate.toLocaleDateString()}
      </span>
    </Wrapper>
  )
}

export default Footer
