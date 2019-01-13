import React from 'react'
import { expColor1 } from '../../styles/vars'
import { SegmentWrapper } from '../../Elements/Wrapper'

export default class SegmentExp extends React.Component<{}, any> {
  render() {
    return (
      <SegmentWrapper id="exp" topBorderColor={expColor1}>
        SegmentExp
      </SegmentWrapper>
    )
  }
}
