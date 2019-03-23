import styled from 'styled-components/macro'
import { grey1 } from '../styles/vars'

export const SegmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 20px);
  max-width: 1240px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px auto;
`

export const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  padding-bottom: 5px;
  border-bottom: 3px solid ${grey1};
  margin: 0 0 5px 0;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;

  & > span {
    margin-left: 10px;
  }
`

export const Set = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  font-size: 16px;
`

export const ExpDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 20px 0;
`

export const ExpTitle = styled.div`
  span:first-child {
    font-weight: 800;
  }

  & > span {
    margin-right: 15px;
  }
`

export const ExpSkill = styled.div`
  margin: 3px;
`

export const ExpDetail = styled.ul`
  margin: 2px 0;
  font-size: 16px;
  padding-left: 20px;
`
