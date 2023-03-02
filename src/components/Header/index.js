import React from 'react';
import Reu from '../../images/reu.png'
import {HeaderContainer, HeaderWrapper, Logo, LogoContainer, NavItem, NavLinks, NavMenu} from "./HeaderElements";

function Header(props) {
	return (
			<HeaderContainer>
				<HeaderWrapper>
					<LogoContainer>
						<Logo src={Reu}/>
					</LogoContainer>
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