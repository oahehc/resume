import React from 'react'
import { Github, LinkedinOption, MailOption, Code } from 'grommet-icons'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import { I18nContext } from '../../Context/Context'
import { infoColor1 } from '../../styles/vars'
import { List, Set } from './SegmentInfo.style'

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

export default class SegmentInfo extends React.Component<{}, any> {
  static contextType = I18nContext
  render() {
    const { getContent } = this.context

    return (
      <SegmentWrapper id="info" topBorderColor={infoColor1}>
        <Title>{getContent('name')}</Title>
        <List>
          <MailOption />
          <a href="mailto:chehao@ntu.edu.tw">chehao@ntu.edu.tw</a>
          <span className="space">|</span>
          <a href="mailto:chehao@ntu.edu.tw">oahehc@gmail.com</a>
        </List>
        <List>
          <Github />
          <a target="_blank" href="https://github.com/oahehc">
            GitHub
          </a>
        </List>
        <List>
          <LinkedinOption />
          <a target="_blank" href="https://tw.linkedin.com/in/oahehc">
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
              <label>{getContent(`skill${skill}`)}</label>
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
}
