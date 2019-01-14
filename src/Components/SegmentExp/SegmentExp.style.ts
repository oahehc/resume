import styled, { css } from 'styled-components/macro'
import { expColor1, expColor2, expColor3, grey3 } from '../../styles/vars'

const ItemBase = css`
  border-top: 5px solid ${expColor2};
  box-shadow: 0 0 2px 0 ${grey3};
  padding: 10px;

  & > div:nth-child(1) {
    font-size: 14px;
    font-weight: 300;

    a {
      margin-left: 3px;
      font-weight: 800;
    }
  }

  & > div:nth-child(2) {
    font-weight: 800;
    margin-bottom: 15px;
  }

  & > div:nth-child(3) > div {
    margin-bottom: 10px;

    & > p {
      margin: 0;
      font-weight: 600;
    }

    & > div {
      padding: 2px 5px 0 5px;

      &:before {
        content: '➥';
        margin-right: 3px;
      }
    }

    & > label {
      background-color: ${expColor3};
      padding: 5px;
      margin-right: 5px;
      font-size: 14px;
      font-weight: 600;
    }
  }
`
const TimeLinePointBase = css`
  left: -14px;
  border-radius: 50%;
  border: 10px solid ${expColor1};
  background-color: white;
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
`

export const Title = styled.div`
  font-weight: 800;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 80px 3fr;
`
export const GridItemLeft = styled.div`
  ${ItemBase}
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
`
export const GridItemRight = styled.div`
  ${ItemBase}
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
`
type timeLineProps = {
  isStart?: boolean
  isSingle?: boolean
}
export const TimeLine = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 3;
  justify-self: center;
  align-self: end;
  position: relative;
  height: ${(props: timeLineProps) =>
    props.isStart ? 'calc(100% - 10px)' : '100%'};
  width: 12px;
  background-color: ${expColor2};

  &:before {
    top: ${(props: timeLineProps) => (props.isStart ? '-5px' : '5px')};
    ${TimeLinePointBase}
  }

  &:after {
    top: 35%;
    ${TimeLinePointBase}
    display: ${(props: timeLineProps) => (props.isSingle ? 'none' : 'block')};
  }
`
