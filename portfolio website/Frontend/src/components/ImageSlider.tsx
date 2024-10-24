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

// https://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--center-mode&knob-centerSlidePercentage_Main=80&knob-showArrows_Toggles=true&knob-showStatus_Toggles=&knob-showIndicators_Toggles=true&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=true&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=true&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5
