const CarouselSlide = (props: any) => {
  return (
    <div className="carousel__wrapper_element" style={props.style}>
      <h3>{props.contentTitle}</h3>
      <p>{props.contentParagraph}</p>
    </div>
  );
};

export default CarouselSlide;
