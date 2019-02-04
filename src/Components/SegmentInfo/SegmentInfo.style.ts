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
    margin-right: 10px;
  }
`
