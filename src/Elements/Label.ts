import styled from 'styled-components/macro'
import { grey1 } from '../styles/vars'

type LabelProps = {
  bgColor: string
}
const Label = styled.label`
  color: ${grey1};
  background-color: ${(props: LabelProps) => props.bgColor};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 5px;
  margin: 2px;
  border-radius: 10px;
  display: inline-block;
`

export default Label
