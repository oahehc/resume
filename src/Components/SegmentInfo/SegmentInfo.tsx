import React, { useContext } from 'react'
import {
  Github,
  LinkedinOption,
  MailOption,
  Code,
  Medium,
  StackOverflow,
} from 'grommet-icons'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import Label from '../../Elements/Label'
import { Space, DevIcon } from '../../Elements'
import { I18nContext } from '../../Context/Context'
import { infoColor1 } from '../../styles/vars'
import { List, Set, Ulist } from './SegmentInfo.style'
import { infoColor2 } from '../../styles/vars'

export const skills = [
  'FrontEnd',
  'Test',
  'Tool',
  'Infra',
  'CICD',
  'Data',
  'Others',
  'Lang',
]

const ExternalLink = ({ href, name }: { href: string; name: string }) => (
  <a target="_blank" href={href} rel="noopener noreferrer">
    {name}
  </a>
)

const SegmentInfo: React.SFC = () => {
  const { getContent } = useContext(I18nContext)

  return (
    <SegmentWrapper id="info" topBorderColor={infoColor1}>
      <Title>{getContent('name')}</Title>
      <List>
        <MailOption />
        <a href="mailto:chehao@ntu.edu.tw" rel="noopener noreferrer">
          oahehc@gmail.com
        </a>
        <Space width="5px" />|<Space width="5px" />
        <a href="mailto:chehao@ntu.edu.tw" rel="noopener noreferrer">
          chehao@ntu.edu.tw
        </a>
      </List>
      <List>
        <LinkedinOption />
        <ExternalLink
          name="Linkedin"
          href="https://tw.linkedin.com/in/oahehc"
        />
      </List>
      <List>
        <Github />
        <ExternalLink name="GitHub" href="https://github.com/oahehc" />
      </List>
      <List>
        <Medium />
        <ExternalLink name="Medium stories" href="https://medium.com/@oahehc" />
      </List>
      <List>
        <DevIcon />
        <Space width="8px" />
        <ExternalLink name="Dev.to" href="https://dev.to/oahehc" />
      </List>
      <List>
        <StackOverflow />
        <ExternalLink
          name="StackOverflow"
          href="https://stackoverflow.com/users/6337192/oahehc"
        />
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
      <br />
      <Title>{getContent('anchorSummary')}</Title>
      <Ulist>
        {getContent('summaryItems').map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </Ulist>
    </SegmentWrapper>
  )
}

export default SegmentInfo
