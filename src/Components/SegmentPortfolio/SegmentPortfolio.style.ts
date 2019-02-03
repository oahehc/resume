import styled from 'styled-components/macro'
import { grey2, portfolioColor2 } from '../../styles/vars'

export const Card = styled.div`
  margin: 10px;
  padding: 5px;
  box-shadow: 0 0 2px 0 ${grey2};
  display: flex;

  label {
    background-color: ${portfolioColor2};
    font-size: 12px;
    font-weight: 600;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 10px;
  }

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
  width: 620px;
  min-width: 620px;
  max-width: 100%;
`
export const CardImgs = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`
