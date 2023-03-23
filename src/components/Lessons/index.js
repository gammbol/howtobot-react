import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import LeftArrow from "../../images/left-arrow.png";
import RightArrow from "../../images/right-arrow.png";
import {
  BtnNext,
  BtnPrev,
  BtnWrapper,
  KeenSlider,
  KeenSliderContainer,
  KeenSliderHeading,
  SliderContainer,
  SliderWrapper,
  SlideWrapper,
} from "./LessonsElements";

export default () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    centered: true,
    slides: {
      spacing: 200,
      slides: 2,
    },
    defaultAnimation: {
      duration: 1000,
    },
  });

  const prevSlide = () => {
    instanceRef.current?.prev();
  };

  const nextSlide = () => {
    instanceRef.current?.next();
  };

  return (
    <KeenSlider id="lessons">
      <KeenSliderContainer>
        <KeenSliderHeading>Уроки</KeenSliderHeading>
        <SliderContainer>
          <BtnWrapper onClick={prevSlide}>
            <BtnPrev src={LeftArrow} />
          </BtnWrapper>
          <SliderWrapper>
            <div ref={sliderRef} className="keen-slider" id="my-slider">
              <div className="keen-slider__slide">
                <SlideWrapper>
                  <iframe
                    style={{ width: "100%", height: "100%" }}
                    width="600"
                    height="315"
                    src="https://www.youtube.com/embed/BTOJBCEqaxM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </SlideWrapper>
              </div>
              <div className="keen-slider__slide">
                <SlideWrapper>
                  <iframe
                    style={{ width: "100%", height: "100%" }}
                    width="600"
                    height="315"
                    src="https://www.youtube.com/embed/tHMNfALC4kw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </SlideWrapper>
              </div>
            </div>
          </SliderWrapper>
          <BtnWrapper onClick={nextSlide}>
            <BtnNext src={RightArrow} />
          </BtnWrapper>
        </SliderContainer>
      </KeenSliderContainer>
    </KeenSlider>
  );
};
