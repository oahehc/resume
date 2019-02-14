import React, { useContext } from 'react'
import { Github, LinkedinOption, MailOption, Code } from 'grommet-icons'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import Label from '../../Elements/Label'
import { I18nContext } from '../../Context/Context'
import { infoColor1 } from '../../styles/vars'
import { List, Set } from './SegmentInfo.style'
import { infoColor2 } from '../../styles/vars'

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

const SegmentInfo: React.SFC = () => {
  const { getContent } = useContext(I18nContext)

  return (
    <SegmentWrapper id="info" topBorderColor={infoColor1}>
      <Title>{getContent('name')}</Title>
      <List>
        <MailOption />
        <a href="mailto:chehao@ntu.edu.tw" rel="noopener">
          chehao@ntu.edu.tw
        </a>
      </List>
      <List>
        <MailOption />
        <a href="mailto:chehao@ntu.edu.tw" rel="noopener">
          oahehc@gmail.com
        </a>
      </List>
      <List>
        <Github />
        <a target="_blank" href="https://github.com/oahehc" rel="noopener">
          GitHub
        </a>
      </List>
      <List>
        <LinkedinOption />
        <a
          target="_blank"
          href="https://tw.linkedin.com/in/oahehc"
          rel="noopener"
        >
          Linkedin
        </a>
      </List>
      <List>
        <Code />
        {getContent('skill')}
      </List>
      <Set>
        {skills.map((skill: string, index: number) => (
          <div key={index}>
            <Label bgColor={infoColor2}>{getContent(`skill${skill}`)}</Label>
            {getContent(`skill${skill}Content`)}
          </div>
        ))}
        {
          // RoR, Phonegap, Unity, Java, Meteor, Ionic
        }
      </Set>
    </SegmentWrapper>
  )
}

export default SegmentInfo
