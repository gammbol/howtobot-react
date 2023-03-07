import React from 'react';
import Reu from '../../images/rea-logo.svg'
import {
	HeaderContainer,
	HeaderWrapper,
	Logo,
	LogoContainer,
	MobileMenuContainer,
	MobileNavItem,
	MobileNavMenu,
	MobileWrapper,
	NavItem,
	NavLinks,
	NavMenu
} from "./HeaderElements";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

function Header(props) {
	const {state, listener} = props;

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<LogoContainer>
					<Logo src={Reu}/>
				</LogoContainer>
				<MobileWrapper onClick={listener}>
					<GiHamburgerMenu style={{width: '100%', height: '100%'}}/>
				</MobileWrapper>
				<NavMenu>
					<NavItem>
						<NavLinks to="about">О нас</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="#">О проекте</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="#">Уроки</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="#">Контакты</NavLinks>
					</NavItem>
				</NavMenu>
			</HeaderWrapper>
			<MobileMenuContainer displayed={state}>
				<MobileWrapper style={{marginLeft: 'auto'}}>
					<AiOutlineClose style={{width: '35px', height: '35px', zIndex: '5'}} onClick={listener}/>
				</MobileWrapper>
				<MobileNavMenu>
					<MobileNavItem>
						<NavLinks to="#about">О нас</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">О проекте</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">Уроки</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">Контакты</NavLinks>
					</MobileNavItem>
				</MobileNavMenu>
			</MobileMenuContainer>
		</HeaderContainer>
	);
}

export default Header;