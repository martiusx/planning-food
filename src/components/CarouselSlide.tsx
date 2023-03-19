const CarouselSlide = (props: any) => {
  return (
    <div className="carousel__wrapper_element" style={props.style}>
      {props.content}
    </div>
  );
};

export default CarouselSlide;
