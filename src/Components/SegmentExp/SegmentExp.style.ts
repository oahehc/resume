import styled, { css } from 'styled-components/macro'
import {
  mobileWidth,
  expColor1Light,
  expColor2,
  grey3,
  white,
} from '../../styles/vars'

type itemProps = {
  borderColor?: string
  bgColor?: string
}
const ItemBase = css`
  border-top: 5px solid ${expColor2};
  border-top-color: ${(props: itemProps) => props.borderColor || expColor2};
  background-color: ${(props: itemProps) => props.bgColor || white};
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
    }

    & > div {
      padding-top: 3px;
      font-size: 16px;

      :before {
        content: '➥';
        margin: 0 5px;
      }
    }
  }
`
const TimeLinePointBase = css`
  left: -14px;
  border-radius: 50%;
  border: 10px solid ${expColor1Light};
  background-color: white;
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 80px 3fr;
  /* grid-template-rows: auto auto auto; */
  grid-auto-rows: minmax(10px, auto);

  @media only screen and (max-width: ${mobileWidth}) {
    display: block;

    & > div {
      margin-bottom: 10px;
    }
  }
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
export const GridItemLeftShort = styled.div`
  ${ItemBase}
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
`
export const GridItemRightShort = styled.div`
  ${ItemBase}
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
`
export const GridItemLeftLarge = styled.div`
  ${ItemBase}
  grid-column: 1 / span 1;
  grid-row: 2 / span 3;
`
export const GridItemRightLarge = styled.div`
  ${ItemBase}
  grid-column: 3 / span 1;
  grid-row: 1 / span 3;
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
  background-color: ${expColor1Light};

  &:before {
    top: ${(props: timeLineProps) => (props.isStart ? '-5px' : '5px')};
    ${TimeLinePointBase}
  }

  &:after {
    top: 35%;
    ${TimeLinePointBase}
    display: ${(props: timeLineProps) => (props.isSingle ? 'none' : 'block')};
  }

  @media only screen and (max-width: ${mobileWidth}) {
    display: none;
  }
`
