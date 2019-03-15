import React, { useContext } from 'react'
import { expColor1, eduColor2 } from '../../styles/vars'
import {
  GridContainer,
  GridItemLeft,
  GridItemRight,
  GridItemLeftShort,
  GridItemRightShort,
  GridItemLeftLarge,
  GridItemRightLarge,
  TimeLine,
} from './SegmentExp.style'
import { lightRed } from '../../styles/vars'
import { SegmentWrapper } from '../../Elements/Wrapper'
import { Title } from '../../Elements/Title'
import Label from '../../Elements/Label'
import { I18nContext } from '../../Context/Context'
import { getDuration } from '../../Utils/date'
import { expColor3 } from '../../styles/vars'

const SegmentExp: React.SFC = () => {
  const { getContent, lang } = useContext(I18nContext)

  const generateDateString = (from: string, to: string): string => {
    return `${from} ~ ${to} (${getDuration({ from, to, lang })}) @`
  }

  return (
    <SegmentWrapper id="exp" topBorderColor={expColor1}>
      <Title>{getContent('expTitle')}</Title>
      <GridContainer>
        <TimeLine isStart />
        <GridItemRight>
          <div>
            {generateDateString('2018/8', 'now')}
            <a href="https://www.cnyes.com" target="_blank" rel="noopener">
              {getContent('anue')}
            </a>
          </div>
          <div>{getContent('anueJobTitle')}</div>
          <div>
            <div>
              {getContent('anueJobStack').map(
                (stack: string, index: number) => (
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
            {generateDateString('2018/4', '2018/7')}
            <a href="https://pebblar.com/" target="_blank" rel="noopener">
              pebblar
            </a>
          </div>
          <div>{getContent('pebblarJobTitle')}</div>
          <div>
            <div>
              {getContent('pebblarJobStack').map(
                (stack: string, index: number) => (
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
            {generateDateString('2017/11', '2018/3')}
            <a
              href="https://www.deepblu.com/discover/live"
              target="_blank"
              rel="noopener"
            >
              deepblu
            </a>
          </div>
          <div>{getContent('deepbluJobTitle')}</div>
          <div>
            <div>
              {getContent('deepbluJobStack1').map(
                (stack: string, index: number) => (
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
        <GridItemLeft borderColor={eduColor2} bgColor={lightRed}>
          <div>{generateDateString('2017/4', '2017/7')}</div>
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
            {generateDateString('2016/6', '2017/10')}
            <a href="http://www.flow.tw/" target="_blank" rel="noopener">
              {getContent('flow')}
            </a>
          </div>
          <div>{getContent('flowJobTitle')}</div>
          <div>
            <div>
              {getContent('flowJobStack1').map(
                (stack: string, index: number) => (
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
                  <Label key={index} bgColor={expColor3}>
                    {stack}
                  </Label>
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
            {generateDateString('2009/12', '2016/5')}
            <a href="https://www.asus.com/tw/" target="_blank" rel="noopener">
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
            {generateDateString('2008/10', '2009/9')}
            {getContent('military')}
          </div>
          <div>{getContent('militaryJobTitle')}</div>
        </GridItemRightShort>
        <GridItemLeftShort borderColor={eduColor2} bgColor={lightRed}>
          <div>
            {generateDateString('2006/9', '2008/6')}
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
        <GridItemRightShort borderColor={eduColor2} bgColor={lightRed}>
          <div>
            {generateDateString('2002/9', '2006/6')}
            {getContent('ntu')}
          </div>
          <div>{getContent('math')}</div>
        </GridItemRightShort>
        <GridItemLeft borderColor={eduColor2} bgColor={lightRed}>
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

export default SegmentExp
