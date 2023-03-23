import React from "react";
import Reu from "../../images/rea-logo.svg";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  LogoContainer,
  MobileMenuContainer,
  MobileNavItem,
  MobileNavLinks,
  MobileNavMenu,
  MobileWrapper,
  NavItem,
  NavLinks,
  NavMenu,
} from "./HeaderElements";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header(props) {
  const { state, listener } = props;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <Logo src={Reu} />
        </LogoContainer>
        <MobileWrapper onClick={listener}>
          <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
        </MobileWrapper>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              spy={true}
              smooth={true}
              exact="true"
              offset={-60}
              duration={500}
            >
              О нас
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="aboutProject"
              spy={true}
              smooth={true}
              exact="true"
              offset={-50}
              duration={500}
            >
              О проекте
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="lessons"
              spy={true}
              smooth={true}
              exact="true"
              offset={-40}
              duration={500}
            >
              Уроки
            </NavLinks>
          </NavItem>
        </NavMenu>
      </HeaderWrapper>
      <MobileMenuContainer displayed={state}>
        <MobileWrapper style={{ marginLeft: "auto" }}>
          <AiOutlineClose
            style={{ width: "35px", height: "35px", zIndex: "5" }}
            onClick={listener}
          />
        </MobileWrapper>
        <MobileNavMenu>
          <MobileNavItem>
            <MobileNavLinks
              to="about"
              spy={true}
              smooth={true}
              exact="true"
              offset={-30}
              duration={500}
              onClick={listener}
            >
              О нас
            </MobileNavLinks>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLinks
              to="aboutProject"
              spy={true}
              smooth={true}
              exact="true"
              offset={-50}
              duration={500}
              onClick={listener}
            >
              О проекте
            </MobileNavLinks>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLinks
              to="lessons"
              spy={true}
              smooth={true}
              exact="true"
              offset={-40}
              duration={500}
              onClick={listener}
            >
              Уроки
            </MobileNavLinks>
          </MobileNavItem>
        </MobileNavMenu>
      </MobileMenuContainer>
    </HeaderContainer>
  );
}

export default Header;
