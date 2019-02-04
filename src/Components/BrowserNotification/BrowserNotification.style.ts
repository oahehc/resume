import styled from 'styled-components/macro'
import {
  transparentGrey,
  modalIndex,
  white,
  linkColor,
  linkColorHover,
} from '../../styles/vars'

export const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${transparentGrey};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${modalIndex};
`

export const Notification = styled.div`
  position: relative;
  top: 10px;
  width: 350px;
  height: 140px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${white};
  transition: top 0.3s ease;

  &.close {
    top: -140px;
  }

  p {
    text-align: center;
    margin: 0;
  }

  button {
    width: 80%;
    height: 30px;
    border: 0;
    background-color: ${linkColor};
    color: ${white};
    cursor: pointer;

    &:hover {
      background-color: ${linkColorHover};
    }

    &:active {
      transform: translateY(5%);
    }
  }
`
