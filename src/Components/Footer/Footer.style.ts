import styled from 'styled-components/macro'
import { grey3 } from '../../styles/vars'

export const Wrapper = styled.div`
  font-size: 12px;
  color: ${grey3};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 0 10px;
  }
`
