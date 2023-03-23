import styled from "styled-components";

export const KeenSlider = styled.section`
  height: 700px;
  margin-top: 40px;

  @media screen and(max-width: 768px) {
    height: auto;
    margin-bottom: 50px;
  }
`;

export const KeenSliderContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const KeenSliderHeading = styled.h1`
  font-size: 48px;
  color: #fff;
  text-align: center;
  background-color: #422168;
`;

export const SliderContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 5px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const BtnWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;
  flex-shrink: 0;

  border-radius: 100px;
  background: #fff;
  cursor: pointer;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BtnPrev = styled.img`
  width: 50%;
  height: 50%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const BtnNext = styled.img`
  width: 50%;
  height: 50%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const SliderWrapper = styled.div`
  //flex-grow: 1;
  overflow: hidden;
  flex-basis: 1100px;
`;

export const SlideWrapper = styled.div`
  max-width: 600px;
  height: 315px;

  margin: 0 auto;
`;
