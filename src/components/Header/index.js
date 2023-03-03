import React from 'react';
import Reu from '../../images/rea-logo.svg'
import {
	HeaderContainer,
	HeaderWrapper,
	Logo,
	LogoContainer,
	MobileWrapper,
	NavItem,
	NavLinks,
	NavMenu
} from "./HeaderElements";
import {GiHamburgerMenu} from "react-icons/gi";

function Header(props) {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<LogoContainer>
					<Logo src={Reu}/>
				</LogoContainer>
				<MobileWrapper>
					<GiHamburgerMenu className={'burgerMenu'} style={{width: '100%', height: '100%'}}/>
				</MobileWrapper>
				<NavMenu>
					<NavItem>
						<NavLinks to="#">О нас</NavLinks>
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
		</HeaderContainer>
	);
}

export default Header;