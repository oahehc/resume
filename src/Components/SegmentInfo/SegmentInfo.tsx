import React from 'react'
import styled from 'styled-components/macro'
import { infoColor1, infoColor2, infoColor2Light } from '../../styles/vars'
import { Github, LinkedinOption, MailOption, Terminal } from 'grommet-icons'
import { I18nContext } from '../../Context/Context'
import { SegmentWrapper } from '../../Elements/Wrapper'

const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &.title {
    font-weight: 800;
    margin-bottom: 8px;
  }

  .space {
    margin: 0 5px;
  }

  svg {
    margin-right: 8px;
  }
`
const Set = styled.div`
  margin-left: 30px;
  font-size: 16px;

  & > div {
    margin-bottom: 5px;
  }

  label {
    background-color: ${infoColor2};
    color: ${infoColor2Light};
    padding: 5px 10px;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 600;
  }
`

export default class SegmentInfo extends React.Component<{}, any> {
  static contextType = I18nContext
  render() {
    const { getContent } = this.context

    return (
      <SegmentWrapper id="info" topBorderColor={infoColor1}>
        <List className="title">{getContent('name')}</List>
        <List>
          <MailOption />
          <a href="mailto:chehao@ntu.edu.tw">chehao@ntu.edu.tw</a>
          <span className="space">|</span>
          <a href="mailto:chehao@ntu.edu.tw">oahehc@gmail.com</a>
        </List>
        <List>
          <Github />
          <a target="blank" href="https://github.com/oahehc">
            GitHub
          </a>
        </List>
        <List>
          <LinkedinOption />
          <a target="blank" href="https://tw.linkedin.com/in/oahehc">
            Linkedin
          </a>
        </List>
        <List>
          <Terminal />
          {getContent('skill')}
        </List>
        <Set>
          <div>
            <label>{getContent('skillFrontEnd')}</label>
            ReactJS/VueJS/JavaScript/Typescript/jQuery, SASS/CSS, HTML5
          </div>
          <div>
            <label>{getContent('skillTest')}</label>
            Jest/Enzyme, Cypress/testCafe/Nightwatch, eslint
          </div>
          <div>
            <label>{getContent('skillTool')}</label>
            Git, Webpack, Yarn/NPM, Gulp, vsCode, Slack, Jira, Confluence,
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
            google map API, youtube API, DFP, LineBot
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
