import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const HeaderContainer = styled.header`
  background: #000;
  z-index: 4;
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
  display: flex;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
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

export const MobileWrapper = styled.div`
  display: none;
  color: #fff;
  width: 32px;
  height: 32px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  width: 100%;
  height: 100%;
  padding: 35px 5px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  opacity: ${({displayed}) => (displayed ? '1' : '0')};
  animation: ${({displayed}) => (displayed ? 'Appearance .9s forwards' : 'Disappearance .9s forwards')};
  transition: .9s all ease-in-out;

  @keyframes Appearance {
    from {
      transform: translate(-100vh);
    }
    to {
      transform: translate(0);
    }
  }
  @keyframes Disappearance {
    to {
      transform: translate(-100vh);
    }
  }
`

export const MobileNavMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const MobileNavItem = styled.div`
  box-sizing: content-box;
  width: 40%;
  padding: 10px 0;
  height: 5%;
  color: #fff;
  border-radius: 50px;
  transition: .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;


  &:hover {
    background: #01bf71;
    color: #000;
  }
`