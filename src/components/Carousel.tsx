import { useState } from "react";
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const [slide, setSlide] = useState<any>([1, 2, 3]);

  const translateStyle = { transform: `translateX(${translateValue}%)` };

  const nextSlide = () => {
    if (translateValue > (slide.length - 1) * -100) {
      setTranslateValue(translateValue - 100);
    }
  };

  const previousSlide = () => {
    if (translateValue < 0) {
      setTranslateValue(translateValue + 100);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <div className="carousel__wrapper_arrows">
          <div
            className="carousel__wrapper_arrows_arrow carousel__wrapper_arrows_arrow-left"
            onClick={previousSlide}
          ></div>
          <div
            className="carousel__wrapper_arrows_arrow carousel__wrapper_arrows_arrow-right"
            onClick={nextSlide}
          ></div>
        </div>
        {slide.map((el: any, index: number) => {
          return (
            <CarouselSlide key={index} style={translateStyle} content={el} />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
