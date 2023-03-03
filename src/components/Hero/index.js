import React from 'react';
import Video from '../../videos/video.mp4'
import {ContentWrapper, HeroBg, HeroContainer, HeroContentContainer, HeroHeading, HeroP, VideoBg} from "./HeroElements";
import TypewriterComponent from "typewriter-effect";
import '../../App.css';

const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg className={'video'} autoPlay loop muted playsInline src={Video}
								 type="video/mp4"/>
			</HeroBg>
			<HeroContentContainer>
				<ContentWrapper>
					<HeroHeading>
						<TypewriterComponent
							className={'typewriter'}
							style={{fontSize: '64px'}}
							options={{
								strings: ['Система, обучающая созданию телеграм ботов',
									'Проект подготовили:',
									'Ушаков Леонид',
									'Смолина Надежда',
									'Барышев Максим',
								],
								autoStart: true,
								loop: true,
								delay: 75
							}}
						/>
					</HeroHeading>
					<HeroP>Ваш верный наставник на пути создания телеграм ботов</HeroP>
				</ContentWrapper>
			</HeroContentContainer>
		</HeroContainer>
	)
}

export default Hero;