import styled from 'styled-components/macro'

type LinkProps = {
  indicatorColor?: string
}
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
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
    background: ${(props: LinkProps) => props.indicatorColor || 'black'};
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
    background: ${(props: LinkProps) => props.indicatorColor || 'transparent'};
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
`
/*
const Aside = styled.div`
  position: fixed;
  top: 200px;
  right: 5px;
  display: flex;
  flex-direction: column;
  & > a {
    cursor: pointer;
    padding: 5px;
  }
  & > a:nth-child(1) {
    background-color: red;
  }
`
*/
