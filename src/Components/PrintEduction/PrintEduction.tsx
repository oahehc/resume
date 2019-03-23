import React, { useContext } from 'react'
import { I18nContext } from '../../Context/Context'
import {
  SegmentWrapper,
  Title,
  ExpDiv,
  ExpTitle,
  ExpDetail,
} from '../../Elements/Print'
import { getDuration } from '../../Utils/date'

const PrintEduction: React.SFC = () => {
  const { lang, getContent } = useContext(I18nContext)

  const generateDateString = (from: string, to: string): string => {
    return `${from}~${to} (${getDuration({ from, to, lang })})`
  }

  return (
    <SegmentWrapper>
      <Title>{getContent('anchorEdu')}</Title>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('uxCourse')}</span>
          <span>{getContent('uxCourseContent')}</span>
          <span>{generateDateString('2017/4', '2017/7')}</span>
        </ExpTitle>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('ntu')}</span>
          <span>{getContent('mba')}</span>
          <span>2006/9~2008/6</span>
        </ExpTitle>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('ntu')}</span>
          <span>{getContent('math')}</span>
          <span>2002/9~2006/6</span>
        </ExpTitle>
      </ExpDiv>
      <ExpDiv>
        <ExpTitle>
          <span>{getContent('onlineCoursePlatform')}</span>
          <span>{getContent('onlineCourse')}</span>
        </ExpTitle>
        <ExpDetail>
          {getContent('onlineCourseContent').map(
            (detail: string, index: number) => (
              <li key={index}>{detail}</li>
            ),
          )}
        </ExpDetail>
      </ExpDiv>
    </SegmentWrapper>
  )
}

export default PrintEduction
