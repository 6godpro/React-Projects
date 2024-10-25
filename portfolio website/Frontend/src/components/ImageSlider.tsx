import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/imageslider.css"

const ImageSlider = () => {
  const images = [image1, image2, image3];
  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage={70}
      autoPlay
      interval={3000}
      transitionTime={500}
      showStatus={false}
      stopOnHover={true}
      showIndicators={false}
    >
      {images.map((image) => {
        return (
          <Image
            src={image}
            height={{base: "auto", md: "600px"}}
            width="100%"
            objectFit="contain"
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;