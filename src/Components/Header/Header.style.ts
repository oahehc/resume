import styled from 'styled-components/macro'
import {
  mobileWidth,
  grey1,
  grey3,
  transparentGrey,
  modalIndex,
} from '../../styles/vars'

type LinkProps = {
  indicatorColor?: string
}

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  position: relative;
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 0 8px;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  & > svg {
    margin-right: 5px;
    width: 15px;
    height: 15px;
    background-color: ${(props: LinkProps) => props.indicatorColor || 'black'};
    padding: 5px;
    border-radius: 50%;
    fill: white;
    stroke: white;
  }

  & > div:after {
    content: ' ';
    position: absolute;
    bottom: -3px;
    left: 30px;
    height: 3px;
    width: 0;
    background-color: ${(props: LinkProps) =>
      props.indicatorColor || 'transparent'};
    transition: width 0.4s ease;
  }

  &:hover,
  &.active {
    & > div {
      color: ${(props: LinkProps) => props.indicatorColor || 'inherit'};
    }

    & > div:after {
      width: calc(100% - 30px);
    }
  }

  @media only screen and (max-width: ${mobileWidth}) {
    display: none;
  }
`

export const Dividend = styled.span`
  width: 0;
  height: 25px;
  border: 1px solid ${grey3};

  @media only screen and (max-width: ${mobileWidth}) {
    display: none;
  }
`

export const MobileToggle = styled.div`
  display: none;

  @media only screen and (max-width: ${mobileWidth}) {
    display: block;
    position: absolute;
    top: 5px;
    left: 10px;

    & > svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const MobileHeader = styled.div`
  display: none;

  @media only screen and (max-width: ${mobileWidth}) {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: ${transparentGrey};
    position: absolute;
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
    z-index: ${modalIndex};

    &.open {
      left: 0;
    }
  }
`

export const MobileLink = styled.a`
  background-color: ${(props: LinkProps) =>
    props.indicatorColor || 'transparent'};
  color: ${grey1};
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
`
