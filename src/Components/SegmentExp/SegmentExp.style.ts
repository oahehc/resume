import styled, { css } from 'styled-components/macro'
import { expColor2, expColor3, grey3 } from '../../styles/vars'

const ExpCardBase = css`
  border-top: 5px solid ${expColor2};
  box-shadow: 0 0 2px 0 ${grey3};
  padding: 10px;
  margin-bottom: 10px;

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

export const ExpCardLeft = styled.div`
  ${ExpCardBase}
  flex: 1;
`
export const ExpCardRight = styled.div`
  ${ExpCardBase}
  flex: 2;
  margin-left: 90px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
