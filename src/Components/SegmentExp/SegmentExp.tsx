import React from 'react'
import { expColor1, eduColor1, eduColor2, eduColor3 } from '../../styles/vars'
import {
  Title,
  GridContainer,
  GridItemLeft,
  GridItemRight,
  GridItemLeftShort,
  GridItemRightShort,
  GridItemLeftLarge,
  GridItemRightLarge,
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
                {getContent('anueJobStack').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
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
                {getContent('pebblarJobStack').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
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
                {getContent('deepbluJobStack1').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
                {getContent('deepbluJobContent1').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                {getContent('deepbluJobStack2').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
                {getContent('deepbluJobContent2').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemRight>
          <GridItemLeft borderColor={eduColor2}>
            <div>{this.generateDateString('2017/4', '2017/7')}</div>
            <div>{getContent('uxCourse')}</div>
            <div>
              <div>{getContent('uxCourseContent')}</div>
            </div>
          </GridItemLeft>
        </GridContainer>
        <GridContainer>
          <TimeLine />
          <GridItemRight>
            <div>
              {this.generateDateString('2016/6', '2017/10')}
              <a href="http://www.flow.tw/" target="blank">
                {getContent('flow')}
              </a>
            </div>
            <div>{getContent('flowJobTitle')}</div>
            <div>
              <div>
                {getContent('flowJobStack1').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
                {getContent('flowJobContent1').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                {getContent('flowJobStack2').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
                {getContent('flowJobContent2').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
              <div>
                {getContent('flowJobStack3').map(
                  (stack: string, index: number) => (
                    <label key={index}>{stack}</label>
                  ),
                )}
                {getContent('flowJobContent3').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemRight>
          <GridItemLeft>
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
          </GridItemLeft>
        </GridContainer>
        <GridContainer>
          <TimeLine />
          <GridItemRightShort>
            <div>
              {this.generateDateString('2008/10', '2009/9')}
              {getContent('military')}
            </div>
            <div>{getContent('militaryJobTitle')}</div>
          </GridItemRightShort>
          <GridItemLeftShort borderColor={eduColor2}>
            <div>
              {this.generateDateString('2006/9', '2008/6')}
              {getContent('ntu')}
            </div>
            <div>{getContent('mba')}</div>
            <div>
              <div>
                <p>{getContent('mbaTitle')}</p>
              </div>
            </div>
          </GridItemLeftShort>
        </GridContainer>
        <GridContainer>
          <TimeLine />
          <GridItemRightShort borderColor={eduColor2}>
            <div>
              {this.generateDateString('2002/9', '2006/6')}
              {getContent('ntu')}
            </div>
            <div>{getContent('math')}</div>
          </GridItemRightShort>
          <GridItemLeft borderColor={eduColor2}>
            <div>{getContent('onlineCourse')}</div>
            <div>{getContent('onlineCoursePlatform')}</div>
            <div>
              <div>
                {getContent('onlineCourseContent').map(
                  (detail: string, index: number) => (
                    <div key={index}>{detail}</div>
                  ),
                )}
              </div>
            </div>
          </GridItemLeft>
        </GridContainer>
      </SegmentWrapper>
    )
  }
}
