import styled from 'styled-components/macro'
import * as vars from '../styles/vars'

type WrapperProps = {
  topBorderColor?: string
}

export const SegmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 20px);
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  margin-bottom: 50px;
  box-shadow: 0 1px 2px 0 ${vars.grey1};
  border-top: 5px solid
    ${(props: WrapperProps) => props.topBorderColor || 'transparent'};
`
