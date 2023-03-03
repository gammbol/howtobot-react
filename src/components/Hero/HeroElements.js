import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  z-index: 1;
  position: relative;
  height: calc(100vh - 96px);

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 3;
  margin: 0 20px;
`

export const HeroHeading = styled.h1`
  font-size: 64px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
`