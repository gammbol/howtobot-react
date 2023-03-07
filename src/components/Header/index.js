import React, {useState} from 'react';
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
	const [state, setState] = useState();
	const MobileMenuListener = () => {
		setState(!state);
	}

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<LogoContainer>
					<Logo src={Reu}/>
				</LogoContainer>
				<MobileWrapper onClick={MobileMenuListener}>
					<GiHamburgerMenu style={{width: '100%', height: '100%'}}/>
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
			<MobileMenuContainer displayed={state}>
				<MobileWrapper style={{marginLeft: 'auto'}}>
					<AiOutlineClose style={{width: '35px', height: '35px', zIndex: '5'}} onClick={MobileMenuListener}/>
				</MobileWrapper>
				<MobileNavMenu>
					<MobileNavItem>
						<NavLinks to="#">О нас</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">О нас</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">О нас</NavLinks>
					</MobileNavItem>
					<MobileNavItem>
						<NavLinks to="#">О нас</NavLinks>
					</MobileNavItem>
				</MobileNavMenu>
			</MobileMenuContainer>
		</HeaderContainer>
	);
}

export default Header;