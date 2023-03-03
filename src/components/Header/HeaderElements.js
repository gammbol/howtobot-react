import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const HeaderContainer = styled.header`
  position: relative;
  background: #000;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const LogoContainer = styled.div`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  margin-left: 24px;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export const NavMenu = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  max-width: 32rem;
  margin-right: 30px;
`

export const NavItem = styled.div`
  box-sizing: content-box;
  flex-basis: 7rem;
  padding: 10px 0;
  height: 100%;
  color: #fff;
  border-radius: 50px;
  transition: .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background: #01bf71;
    color: #000;
  }
`

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
`