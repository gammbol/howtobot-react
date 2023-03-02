import React from 'react';
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContentContainer, ContentWrapper, HeroHeading, HeroP} from "./HeroElements";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContentContainer>
                <ContentWrapper>
                    <HeroHeading>Система, обучающая созданию телеграм ботов</HeroHeading>
                    <HeroP>Насколько трудно и долго их создавать?</HeroP>
                </ContentWrapper>
            </HeroContentContainer>
        </HeroContainer>
    )
}

export default Hero;