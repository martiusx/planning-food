import { useState } from "react";
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const [slide, setSlide] = useState<any>([1, 2, 3]);

  const translateStyle = { transform: `translateX(${translateValue}%)` };
  const carouselContent = [{title:'Lorem1', paragraph: ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}, {title:'Lorem2', paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}, {title:'Lorem3', paragraph: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
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
            <CarouselSlide key={index} style={translateStyle} 
            contentTitle={carouselContent[index].title} 
            contentParagraph={carouselContent[index].paragraph}/>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
