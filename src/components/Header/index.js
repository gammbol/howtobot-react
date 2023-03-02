import React from 'react';
import Logopng from '../../images/Logo.png'
import {HeaderContainer, HeaderWrapper, Logo, LogoContainer, NavItem, NavLinks, NavMenu} from "./HeaderElements";

function Header(props) {
	return (
			<HeaderContainer>
				<HeaderWrapper>
					<LogoContainer>
						<Logo src={Logopng}/>
					</LogoContainer>
					<NavMenu>
						<NavItem>
							<NavLinks to="#">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="#">Our project</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="#">Lessons</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="#">Contacts</NavLinks>
						</NavItem>
					</NavMenu>
				</HeaderWrapper>
			</HeaderContainer>
	);
}

export default Header;