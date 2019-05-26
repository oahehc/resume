import React, { useContext } from 'react'
import { Github, LinkedinOption, MailOption, Code, Globe } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import Link from '../PrintLink/PrintLink'
import { SegmentWrapper, Title, Item, Set } from '../../Elements/Print'

const skills = [
  'FrontEnd',
  'Test',
  'Tool',
  'BackEnd',
  'CICD',
  'Data',
  'Others',
  'Lang',
]

const PrintInfo: React.SFC = () => {
  const { lang, getContent } = useContext(I18nContext)

  return (
    <SegmentWrapper>
      <Title>{getContent('anchorInfo')}</Title>
      <Item>
        {getContent('name')}
        {lang !== 'en' && <span>({getContent('name', 'en')})</span>}
      </Item>
      <Item>
        <MailOption />
        <span>
          <Link src="oahehc@gmail.com" />
        </span>
      </Item>
      <Item>
        <MailOption />
        <span>
          <Link src="chehao@ntu.edu.tw" />
        </span>
      </Item>
      <Item>
        <Github />
        <span>
          <Link src="https://github.com/oahehc" />
        </span>
      </Item>
      <Item>
        <Globe />
        <span>
          <Link src="https://github.com/oahehc/resume" />
        </span>
      </Item>
      <Item>
        <LinkedinOption />
        <span>
          <Link src="https://tw.linkedin.com/in/oahehc" />
        </span>
      </Item>
      <Item>
        <Code />
        <span>{getContent('skill')}</span>
      </Item>
      <Set>
        {skills.map((skill: string, index: number) => (
          <div key={index}>
            {getContent(`skill${skill}`)}: {getContent(`skill${skill}Content`)}
          </div>
        ))}
      </Set>
    </SegmentWrapper>
  )
}

export default PrintInfo
