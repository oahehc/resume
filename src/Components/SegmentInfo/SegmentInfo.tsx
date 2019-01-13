import React from 'react'
import styled from 'styled-components/macro'
import { infoColor1 } from '../../styles/vars'
import { Github, LinkedinOption, MailOption } from 'grommet-icons'
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
      </SegmentWrapper>
    )
  }
}
