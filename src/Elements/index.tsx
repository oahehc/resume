import styled from 'styled-components/macro'
import dev from '../Assets/devto.png'

type SpaceProps = {
  width: string
}
export const Space = styled.span`
  width: ${(prop: SpaceProps) => prop.width};
`

export const DevIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${dev});
  background-size: contain;
`
