import styled from 'styled-components/macro'
import { infoColor2, infoColor2Light } from '../../styles/vars'

export const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &.title {
    font-weight: 800;
    margin-bottom: 8px;
  }

  .space {
    margin: 0 5px;
  }

  svg {
    margin-right: 8px;
  }
`
export const Set = styled.div`
  margin-left: 30px;
  font-size: 16px;

  & > div {
    margin-bottom: 5px;
  }

  label {
    background-color: ${infoColor2};
    color: ${infoColor2Light};
    padding: 5px 10px;
    border-radius: 2px;
    margin-right: 5px;
    font-weight: 600;
  }
`
