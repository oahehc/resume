import React, { useContext } from 'react'
import { I18nContext } from '../../Context/Context'
import { grey5 } from '../../styles/vars'
import Link from '../PrintLink/PrintLink'
import {
  SegmentWrapper,
  Title,
  ExpDiv,
  ExpTitle,
  ExpSkill,
  ExpDetail,
} from '../../Elements/Print'
import Label from '../../Elements/Label'
import { getDuration } from '../../Utils/date'

const PrintExp: React.SFC = () => {
  const { lang, getContent } = useContext(I18nContext)

  const generateDateString = (from: string, to: string): string => {
    return `${from}~${to} (${getDuration({ from, to, lang })})`
  }

  return (
    <SegmentWrapper>
      <Title>{getContent('anchorWork')}</Title>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('anue')}</span>
          <span>{getContent('anueJobTitle')}</span>
          <span>{generateDateString('2018/8', 'now')}</span>
        </ExpTitle>
        <div>
          <Link src={getContent('anueLink')} />
        </div>
        <ExpSkill>
          {getContent('anueJobStack').map((stack: string, index: number) => (
            <Label key={index} bgColor={grey5}>
              {stack}
            </Label>
          ))}
        </ExpSkill>
        <ExpDetail>
          {getContent('anueJobContent').map((detail: string, index: number) => (
            <li key={index}>{detail}</li>
          ))}
        </ExpDetail>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('pebblar')}</span>
          <span>{getContent('pebblarJobTitle')}</span>
          <span>{generateDateString('2018/4', '2018/7')}</span>
        </ExpTitle>
        <div>
          <Link src={getContent('pebblarLink')} />
        </div>
        <ExpSkill>
          {getContent('pebblarJobStack').map((stack: string, index: number) => (
            <Label key={index} bgColor={grey5}>
              {stack}
            </Label>
          ))}
        </ExpSkill>
        <ExpDetail>
          {getContent('pebblarJobContent').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('deepblu')}</span>
          <span>{getContent('deepbluJobTitle')}</span>
          <span>{generateDateString('2017/11', '2018/3')}</span>
        </ExpTitle>
        <div>
          <Link src={getContent('deepbluLink')} />
        </div>
        <ExpSkill>
          {getContent('deepbluJobStack1').map(
            (stack: string, index: number) => (
              <Label key={index} bgColor={grey5}>
                {stack}
              </Label>
            ),
          )}
        </ExpSkill>
        <ExpDetail>
          {getContent('deepbluJobContent1').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
        <ExpSkill>
          {getContent('deepbluJobStack2').map(
            (stack: string, index: number) => (
              <Label key={index} bgColor={grey5}>
                {stack}
              </Label>
            ),
          )}
        </ExpSkill>
        <ExpDetail>
          {getContent('deepbluJobContent2').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('flow')}</span>
          <span>{getContent('flowJobTitle')}</span>
          <span>{generateDateString('2016/6', '2017/10')}</span>
        </ExpTitle>
        <div>
          <Link src={getContent('flowLink')} />
        </div>
        <ExpSkill>
          {getContent('flowJobStack1').map((stack: string, index: number) => (
            <Label key={index} bgColor={grey5}>
              {stack}
            </Label>
          ))}
        </ExpSkill>
        <ExpDetail>
          {getContent('flowJobContent1').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
        <ExpSkill>
          {getContent('flowJobStack2').map((stack: string, index: number) => (
            <Label key={index} bgColor={grey5}>
              {stack}
            </Label>
          ))}
        </ExpSkill>
        <ExpDetail>
          {getContent('flowJobContent2').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
      </ExpDiv>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('asus')}</span>
          <span>{getContent('asusJobTitle')}</span>
          <span>{generateDateString('2009/12', '2016/5')}</span>
        </ExpTitle>
        <div>
          <Link src={getContent('asusLink')} />
        </div>
        <div>▶ {getContent('asusJobItem1')}</div>
        <ExpDetail>
          {getContent('asusJobContent1').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
        <div>▶ {getContent('asusJobItem2')}</div>
        <ExpDetail>
          {getContent('asusJobContent2').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
        <div>▶ {getContent('asusJobItem3')}</div>
        <ExpDetail>
          {getContent('asusJobContent3').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('military')}</span>
          <span>{getContent('militaryJobTitle')}</span>
          <span>{generateDateString('2008/10', '2009/9')}</span>
        </ExpTitle>
      </ExpDiv>
    </SegmentWrapper>
  )
}

export default PrintExp
