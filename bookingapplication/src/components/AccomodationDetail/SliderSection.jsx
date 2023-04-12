import Carousel from 'react-bootstrap/Carousel';
import "./accdetail.css"

function SliderSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2637581.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default SliderSection;