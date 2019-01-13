import React from 'react'
import { workColor1 } from '../../styles/vars'
import { SegmentWrapper } from '../../Elements/Wrapper'

export default class SegmentWork extends React.Component<{}, any> {
  render() {
    return (
      <SegmentWrapper id="work" topBorderColor={workColor1}>
        SegmentWork
      </SegmentWrapper>
    )
  }
}
