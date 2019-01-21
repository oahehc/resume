import React from 'react'
import { Github, LinkedinOption, MailOption, Code } from 'grommet-icons'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import { I18nContext } from '../../Context/Context'
import { infoColor1 } from '../../styles/vars'
import { List, Set } from './SegmentInfo.style'

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
          <div>
            <label>{getContent('skillFrontEnd')}</label>
            ReactJS / VueJS / JavaScript / Typescript / jQuery, Styled-component
            / SASS / CSS / CSS module, HTML5
          </div>
          <div>
            <label>{getContent('skillTest')}</label>
            Jest / Enzyme, Cypress / testCafe / Nightwatch, eslint
          </div>
          <div>
            <label>{getContent('skillTool')}</label>
            Git, Webpack, Yarn / NPM, Gulp, vsCode, Slack, Jira, Confluence,
            Sentry
          </div>
          <div>
            <label>{getContent('skillBackEnd')}</label>
            Node.js, AWS, firebase, PHP, MySql
          </div>
          <div>
            <label>{getContent('skillCICD')}</label>
            Travis CI, Codecov, Heroku, Netlify
          </div>
          <div>
            <label>{getContent('skillData')}</label>
            TensorFlow, Python, GA, GTM
          </div>
          <div>
            <label>{getContent('skillOthers')}</label>
            google map API, youtube API, DFP, LineBot, GA, GTM
            {
              // RoR, Phonegap, Unity, Java, Meteor, Ionic
            }
          </div>
          <div>
            <label>{getContent('skillLang')}</label>
            {`${getContent('skillLangContent')}`}
          </div>
        </Set>
      </SegmentWrapper>
    )
  }
}
