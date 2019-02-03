import styled from 'styled-components/macro'
import { transparentGrey, modalIndex } from '../../styles/vars'

export const Img = styled.img`
  height: 120px;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const Lightbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${transparentGrey};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${modalIndex};

  img {
    max-width: 80%;
    max-height: 80%;
  }
`

export const Control = styled.div`
  width: 100px;
  height: 200px;
  max-width: 10%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${transparentGrey};
  }
`
