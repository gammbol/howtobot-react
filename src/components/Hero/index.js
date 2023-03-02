import React from 'react';
import Video from '../../videos/pexels-cottonbro-5473968.mp4'
import {HeroContainer, HeroBg, VideoBg} from "./HeroElements";

const Hero = () => {
	return (
			<HeroContainer>
				<HeroBg>
					<VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
				</HeroBg>
				{/*<HeroContentContainer>*/}
				{/*	<ContentWrapper>*/}
				{/*		<HeroHeading></HeroHeading>*/}
				{/*		<HeroP></HeroP>*/}
				{/*	</ContentWrapper>*/}
				{/*</HeroContentContainer>*/}
			</HeroContainer>
	)
}

export default Hero;