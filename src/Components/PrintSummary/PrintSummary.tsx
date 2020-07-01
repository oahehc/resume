import React, { useContext } from 'react'
import { I18nContext } from '../../Context/Context'
import {
  SegmentWrapper,
  Title,
  ExpDetail,
  LayoutSpace,
} from '../../Elements/Print'

const PrintSummary: React.SFC = () => {
  const { getContent } = useContext(I18nContext)
  return (
    <SegmentWrapper>
      <Title>{getContent('anchorSummary')}</Title>
      <ExpDetail>
        {getContent('summaryItems').map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ExpDetail>
      <LayoutSpace height="12px" />
    </SegmentWrapper>
  )
}

export default PrintSummary
