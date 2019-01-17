import React from 'react'
import { expColor1 } from '../../styles/vars'
import {
  Title,
  GridContainer,
  GridItemLeft,
  GridItemRight,
  TimeLine,
} from './SegmentExp.style'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { I18nContext } from '../../Context/Context'
import { getDuration } from '../../Utils/date'

export default class SegmentExp extends React.Component<{}, any> {
  static contextType = I18nContext

  generateDateString = (from: string, to: string): string => {
    const { lang } = this.context

    return `${from} ~ ${to} (${getDuration({ from, to, lang })}) @`
  }

  render() {
    const { getContent } = this.context

    return (
      <SegmentWrapper id="exp" topBorderColor={expColor1}>
        <Title>{getContent('expTitle')}</Title>
        <GridContainer>
          <TimeLine isStart />
          <GridItemRight>
            <div>
              {this.generateDateString('2018/8', 'now')}
              <a href="https://www.cnyes.com" target="blank">
                {getContent('anue')}
              </a>
            </div>
            <div>{getContent('anueJobTitle')}</div>
            <div>
              <div>
                <label>Nextjs</label>
                <label>React</label>
                <label>Redux</label>
                <label>Webpack</label>
                <label>Styled-jsx</label>
                <label>Jest</label>
                <label>Enzyme</label>
                {getContent('anueJobContent').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemRight>
          <GridItemLeft>
            <div>
              {this.generateDateString('2018/4', '2018/7')}
              <a href="https://pebblar.com/" target="blank">
                pebblar
              </a>
            </div>
            <div>{getContent('pebblarJobTitle')}</div>
            <div>
              <div>
                <label>React</label>
                <label>Redux-Saga</label>
                <label>Styled-Component</label>
                <label>Webpack</label>
                <label>Jest</label>
                <label>Enzyme</label>
                <label>Firebase</label>
                <label>GoogleMap API</label>
                {getContent('pebblarJobContent').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemLeft>
        </GridContainer>
        <GridContainer>
          <TimeLine />
          <GridItemRight>
            <div>
              {this.generateDateString('2017/11', '2018/3')}
              <a href="https://www.deepblu.com/discover/live" target="blank">
                deepblu
              </a>
            </div>
            <div>{getContent('deepbluJobTitle')}</div>
            <div>
              <div>
                <label>React(SSR)</label>
                <label>Redux</label>
                <label>Webpack</label>
                <label>SCSS</label>
                <label>CSS module</label>
                <label>NodeJS</label>
                {getContent('deepbluJobContent1').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                <label>RoR</label>
                {getContent('deepbluJobContent2').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemRight>
          <GridItemLeft>
            <div>
              {this.generateDateString('2016/6', '2017/10')}
              <a href="http://www.flow.tw/" target="blank">
                {getContent('flow')}
              </a>
            </div>
            <div>{getContent('flowJobTitle')}</div>
            <div>
              <div>
                <label>VueJS</label>
                <label>Nightwatch</label>
                <label>Webpack</label>
                <label>AWS</label>
                {getContent('flowJobContent1').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                <label>jQuery</label>
                <label>ChartJS</label>
                <label>SCSS</label>
                <label>Gulp</label>
                <label>AWS</label>
                {getContent('flowJobContent2').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                <label>jQuery</label>
                <label>Boostrap</label>
                <label>SCSS</label>
                <label>Gulp</label>
                {getContent('flowJobContent3').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemLeft>
        </GridContainer>
        <GridContainer>
          <TimeLine isSingle />
          <GridItemRight>
            <div>
              {this.generateDateString('2009/12', '2016/5')}
              <a href="https://www.asus.com/tw/" target="_blank">
                {getContent('asus')}
              </a>
            </div>
            <div>{getContent('asusJobTitle')}</div>
            <div>
              <div>
                <p>{getContent('asusJobItem1')}</p>
                {getContent('asusJobContent1').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                <p>{getContent('asusJobItem2')}</p>
                {getContent('asusJobContent2').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                <p>{getContent('asusJobItem3')}</p>
                {getContent('asusJobContent3').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemRight>
        </GridContainer>
      </SegmentWrapper>
    )
  }
}

/*

  <div class="container-fluid page" id="education" data-role="page">
    <dl class="dl-horizontal">
      <dt class="subtitleIcon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></dt>
      <dd class="subtitle">Education</dd>
      <dt>2002~2006</dt>
      <dd>
        Math, National Taiwan University
        <br><cite> - bachelor degree</cite>
      </dd>
      <dt>2006~2008</dt>
      <dd>
        MBA, National Taiwan University
        <br><cite> - master degree (majoring in Operation Management)</cite>
      </dd>
      <dt>201704~201707</dt>
      <dd>
        User Experience Fundamentals, UiGathering & Trend Education Foundation
      </dd>
      <dt>Online Course</dt>
      <dd>
        Algorithmic Thinking, Rice University
        <!-- <br><cite> - Luay Nakhleh, Scott Rixner, Joe Warren</cite> -->
      </dd>
      <dd>
        Game Development for Modern Platforms, MSU
        <!-- <br><cite> - Brian Winn</cite> -->
      </dd>
      <dd>
        Build Software Applications, Duke
        <!-- <br><cite> - Andrew D. Hilton, Robert Duvall, Susan H. Rodger, Owen Astrachan</cite> -->
      </dd>
      <dd>
        Build Complete Web Solutions, HKUST
        <!-- <br><cite> - Jogesh K. Muppala</cite> -->
      </dd>
      <dd>
        Make Compelling Design, CalArts
        <!-- <br><cite> - Anther Kiley, Michael Worthington, Gail Swanlund, Lorraine Wild, Louise Sandhaus</cite> -->
      </dd>
      <dd>
        Web Application Development, UNM
        <!-- <br><cite> - Greg Heileman, Manel Martínez-Ramón</cite> -->
      </dd>
      <dd>
        Create a Web Experience, University Of London
        <!-- <br><cite> - Marco Gillies, James Ohene-Djan, Matthew Yee-King, Mick Grierson, Kate Devlin</cite> -->
      </dd>
      <dd>
        Deep Learning by Google - Take machine learning to the next level
        <!-- <br><cite> - Vincent Vanhoucke</cite> -->
      </dd>
      <dd>
        Machine Learning / MLDS course - Hung-yi Lee, NTU
      </dd>
    </dl>
  </div>

*/
