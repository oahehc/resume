import styled from 'styled-components/macro'
import { grey2, portfolioColor2 } from '../../styles/vars'

export const Card = styled.div`
  margin: 10px;
  padding: 5px;
  box-shadow: 0 0 2px 0 ${grey2};
  display: flex;

  h4 {
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
    }
  }

  p {
    margin: 10px;
    font-size: 14px;
    font-style: italic;
  }
`

export const CardInfo = styled.div`
  width: 520px;
  min-width: 520px;
  max-width: 100%;
`
export const CardImgs = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`
